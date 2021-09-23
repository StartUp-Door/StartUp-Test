import React from 'react'
import { Button, Form, FloatingLabel, Table } from 'react-bootstrap'; 

import Navbar from './navbar/Navbar'
import Sidebar from '../components/Food/sidebar/Sidebar'


function Ta() {
    return (
        <div>
            <div><Navbar /></div>
            <div style={{display:'flex'}}>
            <div style={{width:502}}><Sidebar /></div>
            <Table striped bordered hover style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Food Category</th>
                        <th>Food Type</th>
                        <th>Food Menu</th>
                        <th>Amount</th>
                        <th>Price (LKR)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>1</td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select" >        
                                <Form.Select  aria-label="Default select example" label="Select Food Category">
                                {/* <option>Select Food Category</option> */}
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option> 
                                <option value="Teat-Time">Teat-Time</option> 
                                <option value="Seasonal Meals">Seasonal Meals</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select">        
                                <Form.Select  aria-label="Default select example" label="Select Food Type" >
                                {/* <option>Select Food Category</option> */}
                                <option value="Vegetable">Vegetable</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Fish">Fish</option> 
                                <option value="Meat">Meat</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <FloatingLabel controlId="floatingTextarea" label="Food Menu" className="mb-3">
                                <Form.Control as="textarea" placeholder="Add a food menu" />
                            </FloatingLabel>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select" >        
                                <Form.Select  aria-label="Default select example" label="Select Food Category">
                                {/* <option>Select Food Category</option> */}
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option> 
                                <option value="Teat-Time">Teat-Time</option> 
                                <option value="Seasonal Meals">Seasonal Meals</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select">        
                                <Form.Select  aria-label="Default select example" label="Select Food Type" >
                                {/* <option>Select Food Category</option> */}
                                <option value="Vegetable">Vegetable</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Fish">Fish</option> 
                                <option value="Meat">Meat</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <FloatingLabel controlId="floatingTextarea" label="Food Menu" className="mb-3">
                                <Form.Control as="textarea" placeholder="Add a food menu" />
                            </FloatingLabel>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select" >        
                                <Form.Select  aria-label="Default select example" label="Select Food Category">
                                {/* <option>Select Food Category</option> */}
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option> 
                                <option value="Teat-Time">Teat-Time</option> 
                                <option value="Seasonal Meals">Seasonal Meals</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select">        
                                <Form.Select  aria-label="Default select example" label="Select Food Type" >
                                {/* <option>Select Food Category</option> */}
                                <option value="Vegetable">Vegetable</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Fish">Fish</option> 
                                <option value="Meat">Meat</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <FloatingLabel controlId="floatingTextarea" label="Food Menu" className="mb-3">
                                <Form.Control as="textarea" placeholder="Add a food menu" />
                            </FloatingLabel>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select" >        
                                <Form.Select  aria-label="Default select example" label="Select Food Category">
                                {/* <option>Select Food Category</option> */}
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option> 
                                <option value="Teat-Time">Teat-Time</option> 
                                <option value="Seasonal Meals">Seasonal Meals</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="rightbarInfoKey" controlId="select">        
                                <Form.Select  aria-label="Default select example" label="Select Food Type" >
                                {/* <option>Select Food Category</option> */}
                                <option value="Vegetable">Vegetable</option>
                                <option value="Chicken">Chicken</option>
                                <option value="Fish">Fish</option> 
                                <option value="Meat">Meat</option>
                                <option value="Other">Other</option> 
                                </Form.Select>
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <FloatingLabel controlId="floatingTextarea" label="Food Menu" className="mb-3">
                                <Form.Control as="textarea" placeholder="Add a food menu" />
                            </FloatingLabel>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                        <td style={{width:200}}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="number"  />
                            </Form.Group>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    )
}

export default Ta;
