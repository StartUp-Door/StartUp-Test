import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios' 
import { useParams } from "react-router-dom";
import './style1.css'

function Techform() {

    const params = useParams();

    const [client, setClient] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/client/1') 
          .then(res => {
            return res.json();
          })
          .then(data => {
            // console.log(data)
            setClient(data[0]);
          })
    }, [])

    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/service/food/${params.id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data)
                setFood(data[0]);
            })
    }, [])
    // console.log(tech[0].cname)

    const username = useRef();
    const title = useRef();
    const description = useRef();
    const price = useRef();
    // const cimage = useRef();

    const requestJobFood = async (e) => {
        e.preventDefault();
    
        const requestFood = {
            username: username.current.value,
            title: title.current.value,
            description: description.current.value,
            price: price.current.value,
            service_client_id: food && food.cid,
        //   cimage: cimage.current.value,
        }
    
        try{
          await axios.post(`/client/requestFood/${params.id}`, requestFood);  
        }
        catch(err) { 
          console.log(err); 
        }   
    
        window.location.reload();
    
    }

    return (
        <div style={{flex: 4}}>
        <div style={{paddingRight:40, paddingLeft:40, paddingTop:20}}>
            <h3 style={{textAlign: 'center',paddingBottom:10}}>Request your job for the Food & Cuisine</h3>
            <div className="rightbarWrapper">
            {/* <h5 style={{paddingBottom: 10}}>Technician Name - {tech && tech.cname}</h5>            
            <h5 style={{paddingBottom: 10}}>Categories - {tech && tech.tcat}</h5>  */}

            <div class="container">
                <div class="row">
                    <div>
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={food && food.cimage ? ("http://localhost:4000/images/" + food.cimage) : "http://localhost:4000/images/noprofile.png"} />
                            </div>
                            <div class="team-content">
                                <h4 class="name">{food && food.cname}</h4>
                                {/* <h4 class="title">{plant && plant.pcat}</h4> */}
                                <h4 class="title">{food && food.caddress}</h4>
                                <h4 class="title">{food && food.cemail}</h4>
                                <h4 class="title">{food && food.cno}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         

            <div style={{paddingTop: 10}}>
            <Form onSubmit={requestJobFood}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control defaultValue={client.cname} type="text" placeholder="Enter Your Name" ref={username} />
                    </Form.Group>
                    
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Job</Form.Label>
                        <Form.Control required type="text" placeholder="Enter job title" ref={title} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridpass1">
                        <Form.Label>Quantity and Description</Form.Label>
                        <Form.Control type="text" required Row='3' placeholder="Enter Food Job description here..." ref={description} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Net Price</Form.Label>
                    <Form.Control type="text" required placeholder="( LKR )" ref={price} />
                </Form.Group>

                <Button variant="primary" type="submit">
                Send Request
                </Button>
            </Form>
            </div>
            
            </div>
            
        </div>
        </div>
    )
}

export default Techform
