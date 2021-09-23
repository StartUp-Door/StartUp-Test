import "./rightbar.css";
// import Desc from './Desc'
// import Type from './Type'
// import Locate from './Locate'
// import ImageUpload from "./image/ImageUpload";
import "./image/styles.css";
import { Cancel } from "@material-ui/icons";

import { useRef, useState } from "react";
import axios from 'axios' 

import { Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Rightbar() {

  const [file, setFile] = useState(null);
  const id1 = localStorage.cid
  const Rightbar = () => {

    const pcat = useRef();
    const pdesc = useRef();
    const ploca = useRef();
    const pprice = useRef();
    // const pimage = useRef();

  const postPlant = async (e) => {
    e.preventDefault();

    const plant = {
      pcat: pcat.current.value,
      pdesc: pdesc.current.value,
      ploca: ploca.current.value,
      pprice: pprice.current.value,
      // pimage: pimage.current.value,
    }

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      plant.pimage = fileName;
      console.log(plant);
      try {
        await axios.post("/service/upload", data);
      }
      catch (err) {
        console.log(err)
      }
    }

    try{
      await axios.post(`/service/plant/${id1}`, plant); //2 pasan
    }
    catch(err) { 
      console.log(err); 
    }   

    window.location.reload();

  }

    return (
      <div className="rightbarmain">
        <h2 className="rightbarTitle">Job Information for Plants & Crops</h2>

        <Form className="rightbarInfo" onSubmit={postPlant}>

        
          
        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="select">        
            <Form.Select ref={pcat} aria-label="Default select example" label="Select Plant Type" style={{height: 60}}>
              <option>Select Type</option>
              <option value="Plant">Plant</option>
              <option value="Crops">Crops</option>
              <option value="Other">Other</option> 
            </Form.Select>
          </Form.Group>
        </div>

        <div className="rightbarInfoItem">
          <Form.Group className=" rightbarInfoKey" controlId="formBasicDescription">
            <FloatingLabel
              controlId="floatingInput0"
              label="Description"
              className="mb-1"
              style={{width: 400, textDecoration: 'none'}}
            >
              <Form.Control ref={pdesc} style={{height: 60}} required type="text"  placeholder="description" />
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
              <Form.Control ref={ploca} style={{height: 60}} required type="text" placeholder="location" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicPrice">
          <FloatingLabel
              controlId="floatingInput2"
              label="Price(LKR)"
              className="mb-1"
              style={{width: 400}}
            >
              <Form.Control ref={pprice} style={{height: 60}} required type="text" placeholder="price" />
            </FloatingLabel>
          </Form.Group>
        </div> 

        <div className="rightbarInfoItem">
          <Form.Group className="rightbarInfoKey" controlId="formBasicFile">
          {/* <FloatingLabel
              controlId="floatingInput3"
              label="Plant Image"
              className="mb-1"
              style={{width: 400}}
            > */}
            Upload an image
              <Form.Control name="pic" type="file" onChange={(e) => setFile(e.target.files[0])} />
            {/* </FloatingLabel> */}
          </Form.Group>
        </div>  

        
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}

        <Button type="submit" className="sidebarButton"><span>Post Plant</span></Button>

      </Form>

        {/* <form className="rightbarInfo">
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Type />
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Description" />
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Price (LKR)" />
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Locate />
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <ImageUpload cardName="Input Image" />
            </label>
          </div>
          <button className="sidebarButton"><span>Post Plant +</span></button>
        </form> */}

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