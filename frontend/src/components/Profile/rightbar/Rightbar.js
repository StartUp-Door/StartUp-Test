import "./rightbar.css";
import ImageUpload from "./image/ImageUpload";
import "./image/styles.css";
// import { Link } from "react-router-dom";


export default function Rightbar() {

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
          {/* <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Name:</label>
            <input type="text" className="rightbarInfoValue" placeholder="Your name" />
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              Gender:
              <select className="rightbarInfoValue">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div> */}
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Job Title:</label>
            <input className="rightbarInfoValue1" placeholder="Enter Your Jod Title here"></input>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">About You:</label>
            <textarea rows="5" className="rightbarInfoValue1" placeholder="Enter Your Jod details here"></textarea>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">Address:</label>
            <textarea className="rightbarInfoValue1" placeholder="Your Home Address"/>
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