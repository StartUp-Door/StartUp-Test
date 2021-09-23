import "./R.css";
// import Check from "./Check";
// import Date from './Date'
// import Locate from './Locate'
// import Desc from './Desc'
// import { Link } from "react-router-dom";

export default function Rightbar() {

  const HomeRightbar = () => {
    return (
      <>
        <img className="rightbarAd" src="../../../assets/post/co.jpg" alt="" />
        <img className="rightbarAd" src="../../../assets/post/ad.jpeg" alt="" />
      </>
    );
  }

  // const Rightbar = () => {
  //   return (
  //     <div className="rightbarmain">
  //       <h1 className="rightbarTitle">Advertisements</h1>
  //       <form className="rightbarInfo">
  //         <div className="rightbarInfoItem">
  //           <label className="rightbarInfoKey">
  //             <Check />
  //           </label>
  //         </div>
  //         <div className="rightbarInfoItem">
  //           <label className="rightbarInfoKey">
  //             <Desc />
  //           </label>            
  //         </div>
  //         <div className="rightbarInfoItem">
  //           <label className="rightbarInfoKey">
  //             <Locate />
  //           </label>
  //         </div>
  //         <div className="rightbarInfoItem">
  //           <label className="rightbarInfoKey">
  //             Select Available Date & Time Peroid: 
  //             <Date name="From"/>
  //             <Date name="To" />
  //           </label>
            
  //         </div>
  //         <button className="sidebarButton"><span>Update Job +</span></button>
  //       </form>
  //     </div>
  //   );
  // };

  return (
    <div className="main">
      <div className="rightbarWrapper">
        {/* <Rightbar /> */}
        <h2 className="rightbarTitle">Advertisements</h2>
        <HomeRightbar />
      </div>
    </div>
  );
}