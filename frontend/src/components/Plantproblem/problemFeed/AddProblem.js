import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProblemContext } from "../context/ProblemContext";
import axios from 'axios'

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
//import './feed.css'
import './addproblem.css'

const AddProblem = () => {
  const { addProblems } = useContext(ProblemContext);
  const [name, setTitle] = useState("");
  const [price, setDesc] = useState("");
  const params = useParams(); //`/service/bid/${params.post_id}`

  const postBid = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/service/solution/${params.id}`, {
        name,
        price,
      });

      console.log(response.data.data.problem);
      addProblems(response.data.data.problem); 
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  };
  
  return (

   

<div className="rightbar">
<div className="rightbarWrapper">

<div className="container">
   <h2 className="rightbarTitle">Please add your solution/comment</h2>
        
<form className="rightbarInfo">

<div className="rightbarInfoItem">
        <label className="rightbarInfoKey">Name</label>
        <input type="text" class="form-control" id="title" placeholder="Enter your name" 
onChange={(e)=>{
setTitle(e.target.value);
}

}/>
      </div>

<div className="rightbarInfoItem">
        <label className="rightbarInfoKey">Solution</label>
        <textarea type="text" rows="3" class="form-control" id="age" placeholder="Add your solution..."
onChange={(e)=>{
setDesc(e.target.value);
}

}/>
      </div>

      


<button onClick={postBid} type="submit" className="sidebarButton1"><span>Submit</span></button>
</form>

</div>
</div>
</div>



  );
};

export default AddProblem;