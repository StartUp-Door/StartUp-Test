import Navbar from "../../components/Client/Profile/navbar/Navbar";
import Sidebar from "../../components/Client/Profile/sidebar/Sidebar";
import Feed from "../../components/bid/problemFeed/FeedViewClient";
import Rightbar from "../../components/Client/rightbar/Rightbar";
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
