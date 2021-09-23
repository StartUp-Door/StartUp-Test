import React, { useEffect, useContext } from "react";
import { ProblemContext } from "./context/ProblemContext";
import axios from "axios";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useParams } from "react-router-dom";
import { format } from 'timeago.js'

const ProblemList = (props) => {
  
  const { allproblems, setProblems } = useContext(ProblemContext);

  const params = useParams();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/service/technician123/ongoing123');
        console.log(response.data.name);
        setProblems(response.data.data.problems);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await axios.delete(`/client/deleteTechRequest/${id}`);
      console.log(response);
      setProblems(
        allproblems.filter((problem) => {
          return problem.b_id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
    window.location.reload();
  }; 

  return (   

    <div>
      <h3 style={{textAlign: 'center', marginTop:20}}>_Requested Jobs for a Technician_</h3>
        <Table striped bordered hover condensed pagination insertRow deleteRow search variant="" style={{marginLeft:10, marginRight: -10, marginTop:10, boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)'}}>
        <thead>
          <tr className="bg-secondary" style={{width:40, textAlign: 'center', color: 'white'}}>
            <th style={{width:40, textAlign: 'center'}} scope="col">Name</th>
            <th style={{width:40, textAlign: 'center'}} scope="col">Title</th>
            <th style={{width:40, textAlign: 'center'}} scope="col">Description</th>
            <th style={{width:30, textAlign: 'center'}} scope="col">Price (LKR)</th>
            {/* <th style={{width:30, textAlign: 'center'}} scope="col">Date & Time</th>           */}
            <th style={{width:30, textAlign: 'center'}} scope="col">Result</th>          
            <th style={{width:50, textAlign: 'center'}} scope="col">Delete Request</th>          
          </tr>
        </thead>
        <tbody>  
          {
            allproblems && allproblems.map((restaurant,index) => {
              return (
                <tr key={index+1}>
                   
                  <td style={{width:40, textAlign: 'center'}}>{restaurant.cname} <br/>_<span style={{fontSize:11, paddingLeft:1, fontWeight:500, color: 'blue'}}>{format(restaurant.created_on)}</span>_</td>
                  <td style={{width:40, textAlign: 'center'}}>{restaurant.title}</td>
                  <td style={{width:30, textAlign: 'center'}}>{restaurant.description}</td>
                  <td style={{width:30, textAlign: 'center'}}>{restaurant.price}</td>             
                  {/* <td style={{width:30, textAlign: 'center'}}>{format(restaurant.created_on)}</td> */}
                  <td style={{width:20, textAlign: 'center', color:'green'}}>{restaurant.status}</td>

                  <td style={{width:10, textAlign: 'center'}}>
                    <button
                      onClick={(e) => handleDelete(e, restaurant.jobtech_id)}
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
    </div>        
  );
};

export default ProblemList;