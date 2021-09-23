import React,{Fragment,useState} from 'react';
import { Container, Grid,makeStyles,Paper, Typography,TextField, Button } from '@material-ui/core';
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
      
        height:'80%',
        marginTop:theme.spacing(10),
        [theme.breakpoints.down(400 + theme.spacing(2)+2)] :{
            marginTop:0,
            width:'100%',
            height:'100%'
        },
        backgroundColor:'#s4d9d9',
        borderRadius:theme.spacing(2),


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
        marginTop:theme.spacing(5)
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


const ResetPassword = (props) =>{
           const [inputs,setInputs] = useState({
            password:"",
            confirm_password:""
        })

        const {password,confirm_password} = inputs;

        const onSubmitForm = async e =>{
          e.preventDefault();
            try {
               const token = props.match.params.id;
              const body = { password,token };
              
             
              const response = await fetch(
                "http://localhost:4000/auth/reset",
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
                              <Typography component='h1' variant='h5' className={classes.text} >Reset Password</Typography>  
                              <form className={classes.form} onSubmit={onSubmitForm} >
                                   <TextField
                                     fullWidth
                                     autoFocus
                                     type='password'
                                     color = "primary"
                                     margin="normal"
                                     variant='outlined'
                                     label='password'
                                     name="password"
                                     value={password}
                                     required
                                     className={classes.textfield}
                                     onChange={e => onChange(e)}
                                   />
                                    <TextField
                                     fullWidth
                                     autoFocus
                                     type='password'
                                     color = "primary"
                                     margin="normal"
                                     variant='outlined'
                                     label='Confirmpassword'
                                     name="confirm_password"
                                     value={confirm_password}
                                     required
                                     className={classes.textfield}
                                     onChange={e => onChange(e)}
                                   />
                                   <Button
                                   type="submit"
                                     fullWidth
                                     variant='container'
                                                                       
                                     className={classes.button}
                                   >
                                      SUBMIT
                                   </Button>
                              </form>
                         </div>
                    </Container>
            </Grid>
   </Fragment>

    )
   
}

export default ResetPassword;