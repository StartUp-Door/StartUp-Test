// import Post from "../post/Post";
import MapTech from "../post/MapTech";
import MapPlant from '../post/MapPlant'
import MapFood from '../post/MapFood'
import { useContext, useEffect, useState } from "react";
import "./feed2.css";
// import axios from "axios";

import Share from '../Share/ShareNew'

export default function Feed() {

  const [tech, setTech] = useState(null);
  const [plant, setPlant] = useState(null);
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/service/technician/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data)
        setTech(data);
      })
  }, [])
  console.log(tech);

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
          Services Feed        
        </div>
        
        {/* <Post /> */}

        { tech && <MapTech tech={tech} /> }
        { plant && <MapPlant plant={plant} /> }
        { food && <MapFood food={food} /> }

      </div>
    </div>
  );
}