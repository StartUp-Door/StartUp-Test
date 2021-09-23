import { Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './feed.css'

import { useRef, useState, useEffect } from "react";
import axios from 'axios' 

import React from 'react'

function Bid_tech() {

    const name = useRef();
    const price = useRef();

    const postBid = async (e) => {
        e.preventDefault();
    
        const bid = {
            name: name.current.value,
            price: price.current.value,
        }
    
        try{
          await axios.post("/service/tech/bid/1", bid); 
        }
        catch(err) { 
          console.log(err); 
        }   
    
        window.location = '/tech/bid'; 
    
      }

    return (
        <div className="feed" style={{paddingLeft:20, paddingRight:20}}>
            <Form onSubmit={postBid}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={name} type="text" placeholder="Enter your name here..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Bid Price</Form.Label>
                    <Form.Control ref={price} type="text" placeholder="price...(LKR)" />
                    <Form.Text className="text-muted">
                    Enter Your Biddind Price Here
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>            
        </div>
    )
}

export default Bid_tech
