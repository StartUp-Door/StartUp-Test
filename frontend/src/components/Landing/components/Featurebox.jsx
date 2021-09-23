import React from 'react';
import Servicebox from './Servicebox';
import  fimg1 from '../images/Cus.jpg';
import  fimg2 from '../images/Ban1.jpg';
import  fimg3 from '../images/Cus2.jpg';
import  fimg4 from '../images/Cus3.jpg';



function Featurebox()
{
   return(
       <div id="feature">
         <h1>Our Specialities</h1>
         <div className='a-container'>
             <Servicebox image={fimg1} title="Cuisine" para="Here Are Some Benifts"/>
             <Servicebox image={fimg2} title="Technician" para="Are you Wanted to Hire a Technician"/>
             <Servicebox image={fimg3} title="Plants" para="Want Some Plants"/>
             <Servicebox image={fimg4} title="Crops" para="Need Some Fresh Food" />
         </div>
       </div>
   )
   
   
}

export default Featurebox;






