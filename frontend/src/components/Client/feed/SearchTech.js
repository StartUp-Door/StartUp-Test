import MapTech from "../post/MapTech";
import { useContext, useEffect, useState } from "react";
import "./feed2.css";
// import axios from "axios";

import Share from '../Share/ShareNew'

export default function Feed() {

  const [tech, setTech] = useState(null);

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

  return (
    <div className="feed">
      <div className="feedWrapper">
        <div className="jobs_feed"> 
          <Share /> 
          <br/>      
          Services Feed Technician      
        </div>

        { tech && <MapTech tech={tech} /> }

      </div>
    </div>
  );
}