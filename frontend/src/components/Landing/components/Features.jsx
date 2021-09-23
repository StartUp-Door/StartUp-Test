import React from 'react';
import featureimage from '../images/Ban2.jpg';

function Features()
{
    return(
        <div id='features'>
            <div className='features-model'>
            <img src={featureimage} alt='feature-image' />
            </div>
            <div className='features-text'>
                <h2>Features</h2>
                <h3>Here are <span> Services</span> for You</h3>
                <p>We have been working hard to make changes behind the scenes and to
                     deliver you a better experience - all so you 
                     can more easily find the right fit.</p>
                     <button>View more Info</button>
            </div>

        </div>
    )
}

export default Features;