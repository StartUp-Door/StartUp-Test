import React, {useEffect, useState}  from 'react';
import Navbar from './Navbar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IconButton,Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slide from 'react-reveal/Reveal';


const useStyles = makeStyles((theme) => ({

 colorText:
 {
     color:'#5AFF3D',
 },

}));

function Header ()
{
    const classes = useStyles();
  const [checked,setChecked] = useState(false);

  useEffect(() => {
      setChecked(true);
      
  }, []);

    return(
        
        <div id='main'>
           <Navbar/>
           <Collapse in={checked}  {...(checked? { timeout: 1000 } : {})}
 collapsedHeight={40}>
           <div className='name'>
           <Slide right>
        <h1>Welcome to <span>StartUp Door</span> Page</h1>
        <IconButton>
      <ExpandMoreIcon className={classes.colorText}/>
 
     </IconButton>
        <p className='details'>Every time you state what you
         want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is 
            possible. Don’t put a ceiling on yourself.</p>
            </Slide>
            <Slide left>
            <div className='header-btns'>
           
                <a href='#' className='cv-btn'>Hire Me</a>
               
                <a href='#' className='cv-btn'>Register Now</a>
            </div>
            </Slide>
           </div>
           </Collapse>
        
        </div>
    )
}

export default Header;