import React, {useState} from 'react';
import {Link1} from 'react-scroll';
import logo from '../images/logo2.png';
import {Link} from 'react-router-dom';

 function Navbar ()
{

    const [nav,setnav] = useState(false);

    const changeBackground =() =>
    {
        if (window.scrollY >= 50)
        {
            setnav(true);
        }
        else{
            setnav(false);
        }
    }
    window.addEventListener('scroll',changeBackground);

    return(
        <div>
            <nav>
                <Link to='main' className='logo' smooth={true} duration={3000}>
                   <img src={logo} alt='logo'/>
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn' />
                <label className='menu-icon' for='menu-btn'>
                  <span className='nav-icon'></span>

                </label>
                <ul className='menu'>
                    <li><Link to='main' className='active' smooth={true}>Home</Link></li>
                    <li><Link to='features' smooth={true}>Services</Link></li>
                    <li><Link to='services' smooth={true}>Portfolio</Link></li>
                    <li><Link to='subscribe' smooth={true}>Client</Link></li>
                    <li><Link to='feature' smooth={true}>Contact</Link></li>
                   
                </ul>
               
           
           <Link to='/login' className='cv-btn3' smooth={true} >Log In</Link>
             
               
             
            </nav>
        </div>
    )
}

export default Navbar;