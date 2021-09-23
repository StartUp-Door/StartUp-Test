import React,{ Fragment,useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { Container, Paper } from '@material-ui/core';
import {toast} from "react-toastify";
import logo from './images/logo2.png';


const useStyles = makeStyles((theme) => ({
  root:{
    background:'#005377',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
      height:'100vh'
  },
  container:{
    
      height:'80%',
      marginTop:theme.spacing(10),
      [theme.breakpoints.down(400 + theme.spacing(2)+2)] :{
          marginTop:0,
          width:'100%',
          height:'100%'
      },
      backgroundColor:'#s4d9d9'


  },
  div:{
      marginTop:theme.spacing(8),
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
     

  },
  form:{
      width:'100%',
      marginTop:theme.spacing(1),
    
  },
  button:{
      margin:theme.spacing(3,0,2),
      backgroundColor:'#1289ee',
      marginBottom:theme.spacing(4)
  },
  textfield:{
      marginTop:theme.spacing(3)
  },
  text:{
      marginTop:theme.spacing(-5)
  },
  image:{
    marginTop:theme.spacing(-10),
    width:theme.spacing(20),
    height:theme.spacing(20)
  },
  link1:{
    marginLeft:theme.spacing(27),
    textDecoration:'none',
    color:'#1289ee',
    borderRadius:theme.spacing(1)
  },
  link2:{
    textDecoration:'none',
    color:'#1289ee',
  }
 }));

const Login = ({setAuth}) =>{ 
  const [inputs,setInputs] = useState({
    usename:"",
    password:""

})

const {username,password} = inputs;

const onSubmitForm = async e =>{
  e.preventDefault();
    try {
      const body = { username, password };
      const response = await fetch(
        "http://localhost:4000/auth/login",
        {
          method:"POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(body)
        }
      );
      const parseRes = await response.json()
       console.log(parseRes);
  
   // if(parseRes.role === "Client"){
    localStorage.setItem("role", parseRes.role);
    localStorage.setItem("cid",parseRes.cid)
     setAuth(true);
   //   toast.success("Logged in Successfully");
               
  //  }
    } catch (err) {
      console.error(err.message);
    }


} 


  const onChange = e =>
  setInputs({...inputs,[e.target.name]:e.target.value});



   const classes = useStyles();
    return(
         
      <Grid container components='main' className={classes.root}>
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
           <div className={classes.div}>
           <img src={logo} className={classes.image} alt="Logo" />;
                <Typography component='h1' variant='h5' className={classes.text} >Sign In</Typography>  
                <form className={classes.form} onSubmit={onSubmitForm} >
                <TextField
                     variant="outlined"
                     margin="normal"
                     required
                     fullWidth
                     id="username"
                     label="Username"
                     name="username"
                     autoComplete="username"
                     autoFocus
                    // value={username}
                     onChange={e => onChange(e)}
                     className={classes.textfield}
               />
                 <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                     // value={password}
                      autoComplete="current-password"
                      onChange={e => onChange(e)}
          />
                     <Button
                     type="submit"
                     className={classes.button}
                       fullWidth
                       variant='container'                                   
                     >
                        LOGIN
                     </Button>
                <Link className={classes.link2} to="/forgotpassword">
                Forgot password
              </Link> 
              <Link className={classes.link1} to="/register">
                  Sign Up
              </Link> 
                </form>
           </div>
      </Container>
</Grid>
        
        
        
       
     );
}



export default Login;