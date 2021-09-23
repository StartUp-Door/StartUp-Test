import React, { useEffect, useContext, useState } from "react";
import { ProblemContext } from "../context/ProblemContext";
import axios from "axios";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useParams } from "react-router-dom";
import { format } from 'timeago.js'
// var Rating = require('react-rating');
// import Rating from 'react-rating'
// import Rating from '@mui/material/Rating';
import Rating from 'material-ui-rating'

const ProblemList = (props) => {
  
  const { allproblems, setProblems } = useContext(ProblemContext);

  const params = useParams();

  const client_id = 1; //current client tharaka=1
  var clientid_from = client_id;
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/service/viewBid/${params.id}`);
        // console.log(response.data.data.problems);
        setProblems(response.data.data.problems);
      } catch (err) {}
    };

    fetchData();
  }, []);
  console.log(allproblems)

  // const [clientid_to, SETclientid_to] = useState()

  const giveJob = async (e, id, clientid_to) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/client/givejob/${id}`, {
        clientid_to,
        clientid_from,
      });
      console.log(response);
      // setProblems(
      //   allproblems.filter((problem) => {
      //     return problem.b_id !== id;
      //   })
      // );
    } 
    catch (err) {
      console.log(err);
    }
    window.location.reload();
  };

  return (   
    
        <Table striped bordered hover condensed pagination insertRow deleteRow search variant="" style={{marginLeft:20, marginRight: -20, marginTop:40}}>
        <thead>
          <tr className="bg-secondary" style={{width:40, textAlign: 'center'}}>
            <th style={{width:40, textAlign: 'center'}} scope="col">Name</th>
            <th style={{width:50, textAlign: 'center'}} scope="col">Price (LKR)</th> 
            <th style={{width:40, textAlign: 'center'}} scope="col">Bid Time</th>         
          </tr>
        </thead>
        <tbody> 
          {
            allproblems && allproblems.map((bid,index) => {
              return (
                <tr key={index+1}>
                   
                  <td style={{width:40, textAlign: 'center'}}>{bid.name}<br/><span style={{backgroundColor: 'yellow'}}><Rating name="disabled" value={4} disabled size="small" /></span></td> 
                  <td style={{width:50, textAlign: 'center'}}>{bid.price}</td>
                  <td style={{width:50, textAlign: 'center'}}>{format(bid.bid_on)}</td>
                  <td style={{width:10, textAlign: 'center'}}>
                    <form onSubmit={(e) => giveJob(e, bid.post_id, bid.service_client_id)}>
                      <button
                        // onClick={(e) => giveJob(e, bid.post_id)}
                        // onClick = { () => {SETclientid_to(bid.service_client_id) }}
                        className="btn"
                        style={{backgroundColor: 'blue', color: 'white'}}
                        onClick={() => alert(`You are given the job to ${bid.name}`)} 
                        type="submit"
                      >
                        Give job
                      </button>
                    </form>
                  </td>             

                </tr>
              );
            })}
          
        </tbody>
      </Table>
   
  );
};

export default ProblemList;