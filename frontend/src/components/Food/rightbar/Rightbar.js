import "./rightbar.css";
import FoodTime from './FoodTime'
import FoodType from './FoodType'
import Desc from './Desc'
import Locate from './Locate'
import Date from './Date'
// import { Link } from "react-router-dom";

export default function Rightbar() {

  const Rightbar = () => {
    return (
      <div className="rightbarmain">
        <h2 className="rightbarTitle">Job Information for Food & Cuisine</h2>
        <form className="rightbarInfo">
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <FoodTime />
              {/* Food Time:
              <select className="rightbarInfoValue">
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Teat-Time">Teat-Time</option>
                <option value="Seasonal Meals">Seasonal Meals</option>
                <option value="Other">Other</option>
              </select> */}
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <FoodType />
              {/* Food Type:
              <select className="rightbarInfoValue">
                <option value="None">None</option>
                <option value="Vegetable">Vegetable</option>
                <option value="Chicken">Chicken</option>
                <option value="Fish">Fish</option>
                <option value="Meat">Other Meat</option>
                <option value="Other">Other</option>
              </select> */}
            </label>
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
            <Desc name="Food Menu" />
            </label>
            {/* <textarea rows="5" className="rightbarInfoValue1" placeholder="Enter Your Jod details here"></textarea> */}
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Amount" />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Price for breakfast" />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div><div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Price for Lunch" />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div><div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Price for Dinner" />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div><div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Price for Seasonal Meals" />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div><div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Desc name="Price for" />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Locate />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div>
          <div className="rightbarInfoItem">
            <label className="rightbarInfoKey">
              <Date />
            </label>
            {/* <input type="number" className="rightbarInfoValue" placeholder=""/> */}
          </div>
          
          <button className="sidebarButton"><span>Post Job +</span></button>
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