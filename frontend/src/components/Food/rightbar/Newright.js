import "./rightbar.css";
// import FoodTime from './FoodTime'
// import FoodType from './FoodType'
// import Desc from './Desc'
// import Locate from './Locate'
// import Date from './Date'
// import { Link } from "react-router-dom";
// import { Cancel } from "@material-ui/icons";

// import ButtonLink from './Button'

import { useRef, useState } from "react";
import axios from 'axios' 

import { Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Select from 'react-select';

// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

const Type = [
  { value: 'Vegetable ', label: 'Vegetable' },
  { value: 'Chicken ', label: 'Chicken' },
  { value: 'Fish ', label: 'Fish' },
  { value: 'Meat ', label: 'Meat' },
  { value: 'Other ', label: 'Other' },
];

export default function Rightbar() {    

    const [type, setType] = useState([]);
    const saveData = (e) => {
      setType(arry=> [...arry, e[0].value])
      // console.log(e[0].value)
    }
    console.log(type);

    const fcat = useRef();
    // const ftype = useRef();
    const fdesc = useRef();
    const floca = useRef();
    const famount = useRef();
    const fprice = useRef();

    const postFood = async (e) => {
    e.preventDefault();

    const food = {
      fcat: fcat.current.value,
      // ftype: type,
      fdesc: fdesc.current.value,
      floca: floca.current.value,
      famount: famount.current.value,
      fprice: fprice.current.value,
    }

    try{
      await axios.post("/service/food/2", food); 
    }
    catch(err) { 
      console.log(err); 
    }   

    window.location = '/food';

    }


  const Rightbar = () => {    

    return (
      <div className="rightbarmain">
        <h2 className="rightbarTitle">Job Information for Food & Cuisine</h2>

        <Form className="rightbarInfo" onSubmit={postFood}>
          
        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="selectcat">        
            <Form.Select ref={fcat} aria-label="Default select example" label="Select Food Category" style={{height: 60, width: 200}}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option> 
              <option value="Teat-Time">Teat-Time</option> 
              <option value="Seasonal Meals">Seasonal Meals</option>
              <option value="Other">Other</option>  
            </Form.Select>
          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <div>
          <Form.Group className="rightbarInfoKey" controlId="select" style={{width: 400, textDecoration: 'none'}}>  
            <Select
              // onChange={saveData} 
              options={Type} 
              isMulti   
              isSearchable 
              autoFocus={true} 
              // onChange={e => {setType(currentArray => [...currentArray, e])}}                  
              placeholder='Select Category'           
            />
          </Form.Group>

            {/* <Autocomplete
              multiple
              // ref={ftype}
              id="checkboxes-tags-demo"
              options={Type}
              // getOptionSelected={Type}
              onChange={e => {setType(currentArray => [...currentArray, e[0].value])}} 
              disableCloseOnSelect
              getOptionLabel={(option) => option.label}
              renderOption={(option, { selected }) => (
                <React.Fragment>
                  <Checkbox
                    icon={icon}
                    // ref={ftype}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                    
                  />
                  {option.label}
                </React.Fragment>
              )}
              style={{ width: 300}}
              renderInput={(params) => (
                <TextField {...params}  variant="outlined"  placeholder="Type" />
              )}
            /> */}

          </div>
        </div>     

        <div className="rightbarInfoItem">
          <Form.Group className=" rightbarInfoKey" controlId="formBasicDescription">
            <FloatingLabel
              // required
              controlId="floatingInput0"
              label="Food Menu"
              className="mb-1"
              style={{width: 400, textDecoration: 'none'}}
            >
              <Form.Control ref={fdesc} style={{height: 60}} type="text" required  placeholder="menu" />
            </FloatingLabel>
          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicLocation">
          <FloatingLabel
              controlId="floatingInput1"
              label="Location"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={floca} style={{height: 60}} required type="text" placeholder="location" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicAmount">
          <FloatingLabel
              controlId="floatingInput2"
              label="Amount"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={famount} style={{height: 60}} required type="number" placeholder="amount" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicPrice">
          <FloatingLabel
              controlId="floatingInput3"
              label="Price(LKR)"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={fprice} style={{height: 60}} required type="text" placeholder="price" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <Button type="submit" className="sidebarButton"><span>Post Food</span></Button>

      </Form>
      </div>
    );
  };

  return (
    <div className="main">
      <div className="rightbarWrapper">
        <Rightbar />
      </div>
    </div>
  );
}

