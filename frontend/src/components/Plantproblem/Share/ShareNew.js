import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

import { Button, Form, FloatingLabel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Share() {

  const [user, setClient] = useState(null);
  useEffect(() => {
    fetch('http://localhost:4000/client/1')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data[0])
        setClient(data[0]);
      })
  }, [])

  const [file, setFile] = useState(null);

    const description = useRef();
    const category = useRef();
    const location = useRef();
    // const price = useRef();
    // const image = useRef();

  const clientPost = async (e) => {
    e.preventDefault();

    const post = {
      description: description.current.value,
      category: category.current.value,
      location: location.current.value,
    //   price: price.current.value,
      // image: image.current.value,
    }

    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      post.image = fileName;
      console.log(post);
      try {
        await axios.post("/client/upload", data);
      }
      catch (err) {}
    }

    try{
      await axios.post("/client/plantprob/2", post); 
    }
    catch(err) { 
      console.log(err); 
    }   

    window.location.reload();

  }
  return (
    <div className="share1">
      <div className="shareWrapper1">
        <Form onSubmit={clientPost}>
        <label className="rightbarInfoKey1">Problem</label>
        <div className="shareTop1">
         
          <textarea type="text" rows="3" class="form-control"
            required
            placeholder={"Describe your problem here.."}
            className="shareInput1"
            ref={description}
          />


        </div>
        <hr className="shareHr1" />
        {file && (
          <div className="shareImgContainer1">
            <img className="shareImg1" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg1" onClick={() => setFile(null)} />
          </div>
        )}
        <div className="shareBottom1" >
          <div className="shareOptions1">
            <label htmlFor="file" className="shareOption1">
              <PermMedia htmlColor="tomato" className="shareIcon1" /><div className="shareOptionText1">Image</div>
              {/* <span ref={image} className="shareOptionText">Photo</span> */}
              <input
                // required
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                // ref={image}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption1">
              <Label htmlColor="blue" className="shareIcon1" />
              <span className="shareOptionText1">
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect" ref={category}>
                        <option value="Technician">Plants</option>
                        <option value="Food & Cuisine">Crops</option>
                       
                        {/* <option value="3">Three</option> */}
                </Form.Select>
              </span>
            </div>
            <div className="shareOption1">
            
             
              <span ref={location} className="shareOptionText1"></span>
              
        </div>
          </div>
          <Button className="shareButton1" type="submit">
            Post
          </Button>
        </div>
        {/* form */}
        </Form>
      </div>
    </div>
  );
}