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
        const response = await axios.get(`/service/viewBid/${params.id}`);
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
      const response = await axios.delete(`/service/deleteBid/${id}`);
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
    
        <Table striped bordered hover condensed pagination insertRow deleteRow search variant="" style={{marginLeft:20, marginRight: -20, marginTop:40}}>
        <thead>
          <tr className="bg-secondary" style={{width:40, textAlign: 'center'}}>
            <th style={{width:40, textAlign: 'center'}} scope="col">Name</th>
            <th style={{width:50, textAlign: 'center'}} scope="col">Price (LKR)</th>
          
          </tr>
        </thead>
        <tbody> 
          {
            allproblems && allproblems.map((restaurant,index) => {
              return (
                <tr key={index+1}>
                   
                  <td style={{width:40, textAlign: 'center'}}>{restaurant.name}</td>
                  <td style={{width:50, textAlign: 'center'}}>{restaurant.price}</td>             
                  
                  <td style={{width:10, textAlign: 'center'}}>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.b_id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              );
            })}
          
        </tbody>
      </Table>
   
  );
};

export default ProblemList;