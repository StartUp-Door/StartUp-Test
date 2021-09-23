import MapPlant from '../post/MapPlant'
import { useContext, useEffect, useState } from "react";
import "./feed2.css";
// import axios from "axios";

import Share from '../Share/ShareNew'

export default function Feed() {

  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/service/plant/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data)
        setPlant(data);
      })
  }, [])
  console.log(plant);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="jobs_feed"> 
          <Share /> 
          <br/>      
          Services Feed Plants & Crops       
        </div>
        
        { plant && <MapPlant plant={plant} /> }

      </div>
    </div>
  );
}