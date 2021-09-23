import React from 'react';
import Box from './Box';
import image1 from '../images/Ser1.jpg';
import image2 from '../images/Ser2.jpg';
import image3 from '../images/Ser3.jpg';
import image4 from '../images/Ser4.jpg';


function Services()
{
    return(
        <div id='services'>
<div className='s-heading'>
            <h1>Hire You</h1>
            <p>Earn Some extra money </p>
     </div>
     <div className='b-container'>
         <Box image={image1} alter='image1' button='Technician'/>
         <Box image={image2} alter='image1' button='Cuisine'/>
         <Box image={image3} alter='image1' button='Plants & Crops'/>
         <Box image={image4} alter='image1' button='Fruits & Vegetables'/>
     </div>
        </div>
    )
}

export default Services
;