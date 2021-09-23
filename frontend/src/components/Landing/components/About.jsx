import React from 'react';
import aboutimage from '../images/Cus.jpg';
import Slide from 'react-reveal/Reveal';

function About() 
{
    return (
        <Slide right>
        <div id ='about'>
            <div className='about-image'>
                <img src={aboutimage} alt='/'></img>
                </div>
                <div className='about-text'>
                    <h1>Learn More About Us</h1>
                    <p>Build a beautiful website in minutes.
Preview and pick a theme. Don't worry, you can change it anytime.</p>
<button>Read More</button>
                </div>
               

            </div>
            </Slide>
    )
}

export default About;