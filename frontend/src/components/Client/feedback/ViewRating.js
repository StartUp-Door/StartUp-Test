import React, { useEffect, useContext } from "react";
//import ProblemFinder from "../api/ProblemFinder";
import ProblemFinder from "../../Plant/api/ProblemFinder";
//import { ProblemContext } from "../context/ProblemContext";
import { ProblemContext } from "../../Plant/context/ProblemContext";
import { v4 as uuidv4 } from 'uuid';
//import { useHistory } from "react-router-dom";
//import "./viewrating.css"

const ProblemList = (props) => {
  
  const { allproblems, setProblems } = useContext(ProblemContext);
  //let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProblemFinder.get("/plant/");
        console.log(response.data.data);
        setProblems(response.data.data.problems);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await ProblemFinder.delete(`/plantd/${id}`);
      console.log(response);
      setProblems(
        allproblems.filter((problem) => {
          return problem.pid !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  

 

  //const allproblems=props.allproblems

  return (
   
    
      <table className="table table-striped table-hover ">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Disease</th>
            <th scope="col">Description</th>
          
            <th scope="col">Delete</th> 
          </tr>
        </thead>
        <tbody> 
          {
            allproblems && allproblems.map((restaurant,index) => {
              return (
                <tr key={index+1}>
                   
                  <td>{restaurant.title}</td>
                  <td>{restaurant.description}</td> 
                 
                  
               
                  <td>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.pid)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              );
            })}
          
        </tbody>
      </table>
    
    
   
  );
};

export default ProblemList;