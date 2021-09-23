import React, { useState, useContext } from "react";
import ProblemFinder from "../api/ProblemFinder";
import { ProblemContext } from "../context/ProblemContext";
import "./addproblem.css";

const AddProblem = () => {
  const { addProblems } = useContext(ProblemContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  //const [priceRange, setPriceRange] = useState("Price Range");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ProblemFinder.post("/questions/", {
        title,
        desc,
      });

      console.log(response.data.data.problem);
      addProblems(response.data.data.problem); 
    } catch (err) {
      console.log(err);
    }
  };
  return (

    <div className="rightbar">
    <div className="rightbarWrapper">
    
    <div className="container">
       <h2 className="rightbarTitle">Submit your problem</h2>
            
    <form className="rightbarInfo">

<div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Title</label>
            <input type="text" class="form-control" id="title" placeholder="Enter problem title" 
onChange={(e)=>{
setTitle(e.target.value);
}

}/>
          </div>

<div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Description</label>
            <textarea type="text" rows="3" class="form-control" id="age" placeholder="Eneter description"
onChange={(e)=>{
setDesc(e.target.value);
}

}/>
          </div>

          


<button onClick={handleSubmit} type="submit" className="sidebarButton1"><span>Submit</span></button>
</form>

</div>
</div>
</div>
  );
};

export default AddProblem;