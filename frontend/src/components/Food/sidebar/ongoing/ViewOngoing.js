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
        const response = await axios.get('/service/food/ongoing/2');
        console.log(response.data.name);
        setProblems(response.data.data.problems);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const accept = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/client/requestFoodPut/${id}`);
    } 
    catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  const decline = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/client/requestFoodDonotPut/${id}`);
    } 
    catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (   

    <div>
      <h3 style={{textAlign: 'center', marginTop:20}}>Food & Cuisine Ongoing Works</h3>
        <Table striped bordered hover condensed pagination insertRow deleteRow search variant="" style={{marginLeft:10, marginRight: -10, marginTop:10, boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)'}}>
        <thead>
          <tr className="bg-secondary" style={{width:40, textAlign: 'center', color: 'white'}}>
            <th style={{width:40, textAlign: 'center'}} scope="col">Name</th>
            <th style={{width:40, textAlign: 'center'}} scope="col">Title</th>
            <th style={{width:40, textAlign: 'center'}} scope="col">Description</th>
            <th style={{width:30, textAlign: 'center'}} scope="col">Price (LKR)</th>
            <th style={{width:30, textAlign: 'center'}} scope="col">Status</th> 
            <th style={{width:50, textAlign: 'center'}} scope="col">Take an Action</th>          
          </tr>
        </thead>
        <tbody> 
        {
            allproblems && allproblems.map((restaurant,index) => {
              return (
                <tr key={index+1}>
                   
                  <td style={{width:40, textAlign: 'center'}}>{restaurant.username} <br/>_<span style={{fontSize:11, paddingLeft:1, fontWeight:500, color: 'blue'}}>{format(restaurant.created_on)}</span>_</td>
                  <td style={{width:40, textAlign: 'center'}}>{restaurant.title}</td>
                  <td style={{width:30, textAlign: 'center'}}>{restaurant.description}</td>
                  <td style={{width:30, textAlign: 'center'}}>{restaurant.price}</td>             
                  {/* <td style={{width:30, textAlign: 'center'}}>{format(restaurant.created_on)}</td> */}
                  <td style={{width:20, textAlign: 'center'}}>{restaurant.status}</td>

                  <td style={{width:77, textAlign: 'center', display: 'flex', backgroundColor: 'white'}}>
                    <form onSubmit={(e) => accept(e, restaurant.jobfood_id)}>
                      <button
                        onClick={() => alert(`You Accepted ${restaurant.username} job request`)} 
                        className="btn"
                        style={{backgroundColor: '#005377', color: 'white', marginRight: 10}}
                      >
                        Accept
                      </button>
                    </form>
                    <form onSubmit={(e) => decline(e, restaurant.jobfood_id)}>
                      <button
                        style={{width:20}}
                        onClick={() => alert(`Are you sure to Decline ${restaurant.username} job request?`)} 
                        className="btn btn-danger"
                        style={{color: 'white'}}
                      >
                        Decline
                      </button>
                    </form>
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