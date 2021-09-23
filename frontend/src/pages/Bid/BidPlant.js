import Navbar from "../../components/Technician/navbar/Navbar";
import Sidebar from "../../components/Technician/sidebar/Sidebar";
import Feed from "../../components/bid/problemFeed/Feed";
import Bid_tech from '../../components/bid/Bid_tech'
import Rightbar from "../../components/Plant/rightbar/Rightbar";
import "./Dash.css"

export default function BidTech() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        {/* <Bid_tech /> */}
        <Feed />
        <Rightbar/>
      </div>
    </div>
  );
}
