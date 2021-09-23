 const pool = require("../../config/database");
 const bcrypt = require("bcryptjs")
 const jwtGenerator = require("../../utils/jwtGenerator");
 const validInfo = require("../../middleware/validInfo")
 const jwt = require("jsonwebtoken");
 const nodemalier = require('../../middleware/nodemalier');

 require('dotenv').config();


 exports.Register = async (req, res) => {
    try {
         //console.log("Hello")
        //1. req.body (name,email,password)
          
          var role = "Client";
            var status = 0;
            const {username,email,password} = req.body;
           // console.log(username)
        //2.check if user exits
           const user = await pool.query("SELECT * from users WHERE username = $1",[username]);
          // var id = await pool.query("SELECT user_id from users order by id DESC LIMIT 1");
         //  
           if(user.rows.length !== 0){
               return res.status(401).send("User aleardy exist")
           }
             //check email user exits
            const check_Email = await pool.query("SELECT * from users WHERE email = $1",[email]);
            if(check_Email.rows.length !== 0){
                return res.status(401).send("Email aleardy exist")
            }
              

        //3.bcrypt the user password
            const salt = await bcrypt.genSalt(10);
            const bcryptPassword = await bcrypt.hash(password,salt);
          //  res.json(bcryptPassword);
        //4. enter new user inside our database
          const token = jwt.sign({username:req.body.username},process.env.jwtSecret,{expiresIn:"1hr"});

            const newUser = await pool.query(
                "INSERT INTO users(username,role,password,token,status,email) VALUES($1,$2,$3,$4,$5,$6)",
                [username,role,bcryptPassword,token,status,email]
            );
           
          //  res.json(newUser.rows[0]);
        //5. genrating our jwt token
             //  id = id+1;
            nodemalier.sendConfirmationEmail(
                username,
                email,
                token
            );
       //    const token = jwtGenerator(newUser.rows[0].password)
           res.json({token}); 
    } catch (err) {
        console.error(err.message);
    }
  };


  exports.Login = async (req, res) => {
    try {
        //1.req.body
 
          const {username,password} = req.body;
         // console.log(username)
        //2. check if user doesn't exits (if not then we throw error)
         const user = await pool.query("SELECT * FROM users where username = $1",[username]);
            
         if(user.rows.length === 0){
             return res.status(401).json("Password or username is incorrect");
         }
        //3. check if Incomming password is same database password
         const validPassword = await bcrypt.compare(password,user.rows[0].password);
         
          if(!validPassword){
             return res.status(401).json("Password  is incorrect"); 
          }
          const active = user.rows[0].status;
          if(active == 0){
             return res.status(401).json("Conform your account"); 
          }
          const role = user.rows[0].role;
          const user_id = user.rows[0].user_id;
          const clientid = await pool.query("SELECT cid FROM client where user_id = $1",[user_id]);
        //  const token = jwtGenerator(user.rows[0].id);
          const cid  = clientid.rows[0].cid;
          let datetime = new Date()
          const last_login = await pool.query("UPDATE users SET last_login=$1 where user_id=$2",[datetime,user_id])
          return res.status(200).send({role,cid});
           console.log(user_id)
     } catch (err) {
         console.error(err.message);
     }
  };

  exports.Reset = async (req, res) => {
    const {password,token} = req.body;
  //  console.log(token)
    const user = await pool.query("SELECT user_id from users where token=$1",[token]);
    
     
    if(user.rows.length !== 0){
        const  user_id =user.rows[0].user_id;
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password,salt);
        const update_passowrd = await pool.query("UPDATE users SET password=$1 where user_id=$2",[bcryptPassword,user_id]);
        
        if(update_passowrd.rows.length == 0){
            return res.json('sucess');
        }
        
         
       
      }else{
            
          return res.status(401).json("user exits")
      }
    
  };

 


  exports.Confirm = async (req, res) => {
    const token = req.params.id;
  //  console.log(token);
    let A = '0'
    const user = await pool.query("UPDATE users SET status=1 where token=$1",[token]);
   
    const userid = await pool.query("SELECT * FROM users WHERE token=$1",[token]);
    
    let datetime = new Date()
    var u = await pool.query("SELECT cid FROM client ORDER BY cid DESC");
    var ui = u.rows[0].cid+1
 //  console.log(userid.rows[0].user_id)
   console.log(ui)
    const newClient = await pool.query(
       "INSERT INTO client(cid, cname, cemail, cnic, cgender, caddress, cno, created_at,cimage, user_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)",
      [ui,userid.rows[0].username,userid.rows[0].email,A,A,A,A,datetime,A,userid.rows[0].user_id]   
      );

    return res.redirect('http://localhost:3000/login')

    
  };

  exports.Forgotpassword = async (req, res) => {
    try {
        //  return res.status(200).send("Email not in system")
          const {email} = req.body;
          const user = await pool.query("SELECT * FROM users where email = $1",[email]);
        
          if(user.rows.length !== 0){
            const  username=user.rows[0].username;
            const  email=user.rows[0].email;
            const  token=user.rows[0].token;
          //  return res.status(200).send(email);
          //   console.log(username);
       const send =   nodemalier.sendResetEmail(
                   username,
                   email,
                   token
             )
             
             return res.json('sucess');
             
           
          }else{
                
              return res.status(401).json("Email not in system")
          }j
  
      } catch (err) {
          console.error(err.message);
      }

    
  };


  