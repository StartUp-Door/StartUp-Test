import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProblemContext } from "../context/ProblemContext";
import axios from 'axios'

import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './feed.css'

const AddProblem = () => {
  const { addProblems } = useContext(ProblemContext);
  const [name, setTitle] = useState("");
  const [price, setDesc] = useState("");
  const params = useParams();

  const service_client_id = 2;  //current service provider pasan=2

  const postBid = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/service/bid/${params.id}`, {  // add service_client id
        name,
        price,
        service_client_id,
      });

      // console.log(response.data.data.problem);
      addProblems(response.data.data.problem); 
    }
    catch (err) {
      console.log(err);
    }
    window.location.reload();
  };
  
  return (

    <div className="feed" style={{paddingLeft:20, paddingRight:20}}>
            <Form onSubmit={postBid}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name here..." onChange={(e)=>{
                      setTitle(e.target.value);
                      }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Bid Price</Form.Label>
                    <Form.Control type="text" placeholder="price...(LKR)" onChange={(e)=>{
                      setDesc(e.target.value);
                    }} />
                    <Form.Text className="text-muted">
                    Enter Your Bidding Price Here
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Bid
                </Button>
            </Form>            
      </div>
  );
};

export default AddProblem;