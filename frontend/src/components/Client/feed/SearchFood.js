// import Post from "../post/Post";
// import MapTech from "../post/MapTech";
// import MapPlant from '../post/MapPlant'
import MapFood from '../post/MapFood'
import { useContext, useEffect, useState } from "react";
import "./feed2.css";
// import axios from "axios";

import Share from '../Share/ShareNew'

export default function Feed() {

  const [food, setFood] = useState(null);

  useEffect(()=> {
    fetch('http://localhost:4000/service/food/') 
      .then(res => {
        return res.json();
      })
      .then(data => {
        setFood(data);
      })
  }, [])
  console.log(food);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="jobs_feed"> 
          <Share /> 
          <br/>      
          Services Feed Food & Cuisine     
        </div>
        
        { food && <MapFood food={food} /> }

      </div>
    </div>
  );
}