import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useEffect, useState } from "react";
import axios from 'axios' 

function NewRight() {

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

    const cname = useRef();
    const cemail = useRef();
    const caddress = useRef();
    const cno = useRef();
    const cgender = useRef();
    // const cimage = useRef();

    const [file, setFile] = useState(null);

    const UpdateClient = async (e) => {
        e.preventDefault();
    
        const updateclient = {
          cname: cname.current.value,
          cemail: cemail.current.value,
          caddress: caddress.current.value,
          cno: cno.current.value,
          cgender: cgender.current.value,
        //   cimage: cimage.current.value,
        }

        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);
            updateclient.cimage = fileName;
            console.log(updateclient);
            try {
              await axios.post("/client/upload/profile", data);
            }
            catch (err) {
              console.log(err)
            }
          }
    
        try{
          await axios.put("/client/update/profile/1", updateclient); 
        }
        catch(err) { 
          console.log(err); 
        }   
    
        window.location.reload();
    
    }

    return (
        <div style={{paddingRight:40, paddingLeft:40, flex:6.5, paddingTop:20}}>
            <h2 style={{textAlign: 'center',paddingBottom:10}}>Update Your Startup Door Portfolio</h2>
            <div className="rightbarWrapper">

            <Form onSubmit={UpdateClient} style={{boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)', padding:10}}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control defaultValue={client.cname} type="text" placeholder="Enter Your Name" ref={cname} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control defaultValue={client.cemail} type="email" placeholder="Enter email" ref={cemail} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridpass1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter New Password" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword2">
                    <Form.Label>Re-Enter Password</Form.Label>
                    <Form.Control type="password" placeholder="Re-Enter New Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control defaultValue={client.caddress} placeholder="1234 Main St" ref={caddress} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control defaultValue={client.cno} type="text" placeholder="+94*********" ref={cno} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select defaultValue={client.cgender} ref={cgender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control defaultValue={client.cimage} type="file" onChange={(e) => setFile(e.target.files[0])} />
                    </Form.Group>
                </Row>

                {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <Button variant="primary" type="submit">
                Update Me
                </Button>
            </Form>
            </div>
            
        </div>
    )
}

export default NewRight
