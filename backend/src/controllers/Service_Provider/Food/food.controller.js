const db = require("../../../config/database");

exports.addFood = async (req, res) => {
  const cid = parseInt(req.params.id);
  const { fcat, fdesc, floca, famount, fprice } = req.body; //ftype,
  const { rows } = await db.query(
    "INSERT INTO food (fcat, ftype, fdesc, floca, famount, fprice, cid) VALUES ($1, $2, $3, $4, $5, $6, $7)", 
    [fcat, 'Vegetable, Chicken', fdesc, floca, famount, fprice, cid]
  );

  res.status(201).send({
    message: "Food job added successfully!",
    body: {
      job: { fcat, ftype, fdesc, floca, famount, fprice, cid }
    },
  });
};

exports.listFood = async (req, res) => {
  const response = await db.query('SELECT * FROM food INNER JOIN client ON food.cid = client.cid ORDER BY fid DESC');
  res.status(200).send(response.rows);
};

exports.listFoodID = async (req, res) => {
  const fid = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM food INNER JOIN client ON food.cid = client.cid WHERE fid=$1', [fid]);
  res.status(200).send(response.rows);
};

exports.listPosts = async (req, res) => {
  const response = await db.query("SELECT * FROM clientposts INNER JOIN client ON clientposts.cid = client.cid WHERE category='Food & Cuisine' ORDER BY post_id DESC");
  res.status(200).send(response.rows);
};

exports.ongoingID = async (req, res) => {
  const cid = parseInt(req.params.id);
  try {
   const results = await db.query("select * from job_food inner join client on job_food.service_client_id= client.cid where cid=$1 ORDER BY jobfood_id DESC", [cid]);
 
    res.status(200).json({
       status: "Success",
       data: {
           problems:results.rows,
       },       
     });
    } 
    catch (err) {
      console.error(err.message);
    }
};

exports.ongoing = async (req, res) => {
  // const cid = parseInt(req.params.id);
  try {
   const results = await db.query("select * from job_food inner join client on job_food.service_client_id= client.cid where username='Tharaka Athukorala' ORDER BY jobfood_id DESC");
 
    res.status(200).json({
       status: "Success",
       data: {
           problems:results.rows,
       },       
     });
    } 
    catch (err) {
      console.error(err.message);
    }
};