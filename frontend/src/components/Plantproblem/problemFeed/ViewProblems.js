import React, { useEffect, useContext } from "react";
import { ProblemContext } from "../context/ProblemContext";
import axios from "axios";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useParams } from "react-router-dom";

const ProblemList = (props) => {
  
  const { allproblems, setProblems } = useContext(ProblemContext);

  const params = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/service/viewSolution/${params.id}`);
        console.log(response.data.name);
        setProblems(response.data.data.problems);
      } catch (err) {}
    };

    fetchData();
  }, []);

  /*

  //get all problems
router.get("/plant", async (req,res)=>{
    try {
         //1. req.body (title,description,images)
        //const {title,desc} = req.body;

        //2. eneter problem into database
        const results = await pool.query("SELECT * from nproblem" ); 
        //res.json({problem});

        res.status(200).json({
            status: "Success",
           // results:results.rows.length,
            data: {
                problems:results.rows,
            },
            
          });

    } catch (err) {
        console.error(err.message);
    }
})
  */

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(`/service/deleteSolution/${id}`);
      console.log(response);
      setProblems(
        allproblems.filter((problem) => {
          return problem.b_id !== id;
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
            <th scope="col">Name</th>
            <th scope="col">Given solution</th>
          
            <th scope="col">Delete</th> 
          </tr>
        </thead>
        <tbody> 
          {
            allproblems && allproblems.map((restaurant,index) => {
              return (
                <tr key={index+1}>
                   
                  <td>{restaurant.name}</td>
                  <td>{restaurant.price}</td> 
                 
                  
               
                  <td style={{width:10, textAlign: 'center'}}>
                    
                  <button   onClick={(e) => handleDelete(e, restaurant.b_id)} type="button" className="btn btn-danger btn-sm px-3">
                  <i class="fas fa-times"></i>
                  
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