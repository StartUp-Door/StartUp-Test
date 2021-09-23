import "./rightbar.css";
import ImageUpload from "./image/ImageUpload";
import "./image/styles.css";
// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Rightbar() {

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
  console.log(client);
  console.log(client.cname);

  const Rightbar = () => {
    return (
      <div class="rightbarmain">
        <h2 className="rightbarTitle">Your Portfolio</h2>
        <form className="rightbarInfo">
        <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              {/* Profile Image:  */}
              <ImageUpload cardName="Input Image" />
            </label>
            {/* <input type="text" className="rightbarInfoValue" placeholder="Your name" /> */}
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Name: </label>
            <input defaultValue={client.cname} type="text" className="rightbarInfoValue" placeholder="Your name" />
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Email:</label>
            <input defaultValue={client.cemail} type="text" className="rightbarInfoValue" placeholder="Your name" />
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Password:</label>
            <input type="password" className="rightbarInfoValue" placeholder="Your Password" />
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Re-enter Password:</label>
            <input type="password" className="rightbarInfoValue" placeholder="Your Passowrd again" />
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              Gender:
              <select className="rightbarInfoValue" style={{marginLeft:2}}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Address:</label>
            <textarea defaultValue={client.caddress} className="rightbarInfoValue" placeholder="Your Home Address"/>
          </div>
          <button className="sidebarButton"><span>Update Me</span></button>
        </form>
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