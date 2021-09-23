import React, {Fragment,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import logo from './images/logo2.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root:{
    background: '#005377',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
      height:'100vh'
      
  },
  container:{
    
      height:'90%',
      marginTop:theme.spacing(5),
      [theme.breakpoints.down(400 + theme.spacing(2)+2)] :{
          marginTop:0,
          width:'100%',
          height:'100%'
      },
      backgroundColor:'#s4d9d9',


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
      marginBottom:theme.spacing(3)
  },
  textfield:{
      marginTop:theme.spacing(2)
  },
  text:{
      marginTop:theme.spacing(-7)
  },
  image:{
    marginTop:theme.spacing(-10),
    width:theme.spacing(20),
    height:theme.spacing(20)
  },
  check:{
    marginTop:theme.spacing(2)
  },
  link2:{
    textDecoration:'none',
    color:'#1289ee',
  }
  }));


const Register = () =>{
 const [inputs,setInputs] = useState({
     usename:"",
     email:"",
     password:""

 })

 const {username,email,password} = inputs;

 const onChange = e =>
      setInputs({...inputs,[e.target.name]:e.target.value});

 const onSubmitForm = async e =>{
    e.preventDefault();
    try {
        const body = { username,email, password };
      //    console.log(body);
        const response = await fetch(
            "http://localhost:4000/auth/register",
            {
              method: "POST",
              headers: {
                "Content-type": "application/json"
              },
              body: JSON.stringify(body)
            }
          );

          const parseRes = await response.json()
          console.log(parseRes);
    } catch (err) {
        console.error(err.message);
    }
 }     



    const classes = useStyles();

    return(
        <Fragment>
           <Grid container components='main' className={classes.root}>
                    <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                         <div className={classes.div}>
                         <img src={logo} className={classes.image} alt="Logo" />;
                              <Typography component='h1' variant='h5' className={classes.text} >Sign Up</Typography>  
                              <form className={classes.form} onSubmit={onSubmitForm} >
                              <TextField
                              
                               name="username"
                               variant="outlined"
                               required
                               fullWidth
                               id="username"
                               label="Username"
                               value={username}
                               className={classes.textfield}
                               onChange={e => onChange(e)}
                          />
                              <TextField
                                 variant="outlined"
                                 required
                                 fullWidth
                                 id="email"
                                 label="Email Address"
                                 name="email"
                                 autoComplete="email"
                                 value={email}
                                 className={classes.textfield}
                                 onChange={e => onChange(e)}
                            />

                              <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                className={classes.textfield}
                                onChange={e => onChange(e)}
                             />
                                <FormControlLabel className={classes.check}
                                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                               label="I agree to the Startup Door User Agreement and Privacy Policy "
                                  />
                                   <Button
                                   type="submit"
                                   className={classes.button}
                                     fullWidth
                                     variant='container'
                                  >
                                     Sign Up
                                   </Button>
                                   <Link className={classes.link2} to="/login">
                                    Sign In
                                  </Link> 
                              </form>
                         </div>
                    </Container>
            </Grid>
        </Fragment>

    );
}

export default Register;