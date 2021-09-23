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

    const [tech, setTech] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:4000/service/technician/${params.id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data)
                setTech(data[0]);
            })
    }, [])
    console.log(params.id)
    // console.log(tech[0].cname)

    const username = useRef();
    const title = useRef();
    const description = useRef();
    const price = useRef();
    // const cimage = useRef();

    const [file, setFile] = useState(null);

    const requestJobTech = async (e) => {
        e.preventDefault();
    
        const requestTech = {
            username: username.current.value,
            title: title.current.value,
            description: description.current.value,
            price: price.current.value,
            service_client_id: tech && tech.cid, 
        //   cimage: cimage.current.value,
        }
    
        try{
          await axios.post(`/client/requestTech/${params.id}`, requestTech); 
        }
        catch(err) { 
          console.log(err); 
        }   
    
        window.location.reload();
    
    }

    return (
        <div style={{flex: 4}}>
        <div style={{paddingRight:40, paddingLeft:40, paddingTop:20}}>
            <h3 style={{textAlign: 'center',paddingBottom:10}}>Request your job for the Technician</h3>
            <div className="rightbarWrapper">
            {/* <h5 style={{paddingBottom: 10}}>Technician Name - {tech && tech.cname}</h5>            
            <h5 style={{paddingBottom: 10}}>Categories - {tech && tech.tcat}</h5>  */}

            <div class="container">
                <div class="row">
                    <div>
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src={tech && tech.cimage ? ("http://localhost:4000/images/" + tech.cimage) : "http://localhost:4000/images/noprofile.png"} />
                            </div>
                            <div class="team-content">
                                <h4 class="name">{tech && tech.cname}</h4>
                                <h4 class="title">{tech && tech.tcat}</h4>
                                <h4 class="title">{tech && tech.tdesc}</h4>
                                <h4 class="title">{tech && tech.cemail}</h4>
                                <h4 class="title">{tech && tech.cno}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         

            <div style={{paddingTop: 10}}>
            <Form onSubmit={requestJobTech}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control defaultValue={client.cname} type="text" placeholder="Enter Your Name" ref={username} />
                    </Form.Group>
                    
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Job </Form.Label>
                        <Form.Control required type="text" placeholder="Enter job title" ref={title} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridpass1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control required type="text" Row='3' placeholder="Enter Technical Job description here..." ref={description} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Starting Price</Form.Label>
                    <Form.Control required type="text" placeholder="( LKR )" ref={price} />
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
