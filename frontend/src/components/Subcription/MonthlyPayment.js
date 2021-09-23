import React,{Fragment,useState,useEffect} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import StripeCheckout from 'react-stripe-checkout';
import SlipPayment from './SlipPayment';
import UploadSlip from './UploadSlip';
import image1 from './Upload/money.png';
import image2 from './Upload/cheque.png'
import { useLocation, useParams }  from 'react-router-dom';
import axios from 'axios'
import image from './image1.jpg'



const useStyles = makeStyles((theme) => ({ 
    root:{
      background:'#005377',
      backgroundRepeat:'repeat',
      backgroundSize:'cover',
      backgroundPosition:'center',
   //   height:'100vh'
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
      },
      toolbarTitle: {
        flexGrow: 1,
      },
      toolbar: {
        flexWrap: 'wrap',
      },
      link: {
        margin: theme.spacing(1, 1.0),
      },
      header: {
          marginTop:theme.spacing(2),
          marginLeft:theme.spacing(70),
          color:'white'
      },
      cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '250px',
        width:'500px',
        display: 'flex',
        flexDirection: 'column',
      },
      one:{
        paddingTop:theme.spacing(40),  
        paddingLeft:theme.spacing(40),
        paddingRight:theme.spacing(-50),
        marginLeft:theme.spacing(17)
        

      } ,
      two:{
       //paddingTop:theme.spacing(40),  
        paddingLeft:theme.spacing(10),
        paddingRight:theme.spacing(20),
        marginLeft:theme.spacing(-10)
   //     paddingRight:theme.spacing(10)
      },
      PaymentButton:{
          color:'white',
          backgroundColor:'blue',
          margin:theme.spacing(7),
          marginLeft:theme.spacing(13),
          marginTop:theme.spacing(4),
          padding:theme.spacing(-5),
          paddingInline:theme.spacing(15)
      },
      cardContent:{
          backgroundColor:'#c7d0d4'
      },
      headline:{
          textAlign:'center',
          
      },
      image:{
        margin:theme.spacing(-4),
        marginLeft:theme.spacing(21),
        width:theme.spacing(20),
        height:theme.spacing(20)
      },
      slip:{
        paddingTop:theme.spacing(-100),
        paddingRight:theme.spacing(10)
      },
      logo:{
        margin:theme.spacing(-60),
        marginLeft:theme.spacing(5),
        width:theme.spacing(80),
        height:theme.spacing(80),
        borderRadius: theme.spacing(50),
        opacity:theme.spacing(100)
      }


 }));
 
 

export default function Payment() {
    const classes = useStyles();
    const [start,setStart] = useState('')
    const [Title,setTitle] = useState('')
    
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:4000/plan/serviceprovider/${id}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
         setTitle(data[0].title)
          if(data[0].title == 'Start'){
              var i = 100
              setStart(i)
          }else if(data[0].title == 'Pro'){
            var j = 300
            setStart(j)

            console.log(start)
          }else if(data[0].title == 'Enterprise'){
            var z = 1000
              setStart(z)
          }
       
        
      })
    },[])

  
    const [product,setProduct] = useState({
        name: `${Title}`,
        price: `${start}` ,
        productBy:"facebook",
        cid:id
      })

      const makePayment = (token)=>{
        const body = {
          token,
          product,
          
        }
    
        const headers = {
          "Content-Type" : "application/json"
        }
    
        return fetch(`http://localhost:4000/plan/payment/`,{
          method:"POST",
          headers,
          body:JSON.stringify(body)
        }).then(response =>{
          console.log("Response",response)
          const {status} = response;
           
          console.log("STATUS", status)
        })
          .catch(err => console.log(err))
    }
    return (
        <Fragment>
                 
            <div className={classes.root}>
              <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
               <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          <Link href="/client"  color="primary" variant="outlined" className={classes.link}>
            Startup Door
          </Link>
          </Typography>
          
         
        </Toolbar>
      </AppBar >
      
                  <h1 className={classes.header}>Monthly Payment Method</h1>
                
             <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
          
              <Grid  xs={12} sm={6} md={4} className={classes.one}>
                <Card className={classes.card}>
               
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.headline} gutterBottom variant="h5" component="h2">
                      Slip Payment
                    </Typography>
                      <div>
                      <img src={image1} className={classes.image} alt="Logo" />;
                      </div>
                       
                           <SlipPayment  >
                           <div className={classes.slip}>
                               <UploadSlip />
                               </div>
                           </SlipPayment>
                       
                  </CardContent>
                
                </Card>
              </Grid>
              <Grid  xs={12} sm={6} md={4} className={classes.two}>
                <Card className={classes.card}>
               
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.headline} gutterBottom variant="h5" component="h2">
                       Stripe
                    </Typography>
                    <img src={image2} className={classes.image} alt="Logo" />;
                     <StripeCheckout
                        stripeKey={process.env.REACT_APP_KEY }
                        token={makePayment}
                        name="Buy"
                       amount={start* 100}
                      > <Button className={classes.PaymentButton}>
                           {start}
                      </Button>
      
                    </StripeCheckout>
                  </CardContent>
                
                </Card>
              </Grid>
           
          </Grid>
        </Container>  
        <div style={{borderRadius:'10'}} className={classes.logo}>
                       <img src={image} alt="image" />;
                   </div>  
        </div> 
        </Fragment>
    )
}
