import { Container, Grid,makeStyles,Paper, Typography,TextField, Button } from '@material-ui/core';
import React from 'react';
import { Fragment,useState } from 'react';
import logo from './images/logo2.png';

const use = makeStyles(theme=>({
        root:{
          background:'#005377',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'100vh'
        },
        container:{
          
            height:'60%',
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
            backgroundColor:'#1289ee'
        },
        textfield:{
            marginTop:theme.spacing(3)
        },
        text:{
            marginTop:theme.spacing(-3)
        },
        image:{
          marginTop:theme.spacing(-10),
          width:theme.spacing(20),
          height:theme.spacing(20)
        }
}))


const FogotPassword = () =>{
    const [inputs,setInputs] = useState({
        email:""
    })

    
const {email} = inputs;

const onSubmitForm = async e =>{
  e.preventDefault();
    try {
      const body = { email };
   //  console.log(body)
   const response = await fetch(
    "http://localhost:4000/auth/forgotpassword",
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

     } catch (err) {
      console.error(err.message);
    }

}
    const onChange = e =>
  setInputs({...inputs,[e.target.name]:e.target.value});

    const classes = use()
     return(
        <Fragment>
            <Grid container components='main' className={classes.root}>
                    <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                         <div className={classes.div}>
                         <img src={logo} className={classes.image} alt="Logo" />;
                              <Typography component='h1' variant='h5' className={classes.text} >Forgot Password</Typography>  
                              <form className={classes.form} onSubmit={onSubmitForm} >
                                   <TextField
                                     fullWidth
                                     autoFocus
                                     color = "primary"
                                     margin="normal"
                                     variant='outlined'
                                     label='Email'
                                     name="email"
                                     value={email}
                                     required
                                     className={classes.textfield}
                                     onChange={e => onChange(e)}
                                   />
                                   <Button
                                   type="submit"
                                   className={classes.button}
                                     fullWidth
                                     variant='container'
                                
                                                                       
                                   >
                                      RESET PASSWORD
                                   </Button>
                              </form>
                         </div>
                    </Container>
            </Grid>
        </Fragment>

     )
}

export default FogotPassword;