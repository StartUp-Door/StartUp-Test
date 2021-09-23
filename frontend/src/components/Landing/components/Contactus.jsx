import React from 'react';
import Slide from 'react-reveal/Reveal';

function Contact()
{
     return(
         <div id='contact'>
             <Slide left>
             <h1>Contact Us</h1>
             <form>
             <input type='text' placeholder="Full Name" required/>
             <input type='email' placeholder='Type Your Email' required/>
             <textarea placeholder='Write here....' name='message'></textarea>
             <input type='submit' value='Send' />
             </form>
             </Slide>
         </div>
     )
}

export default Contact;