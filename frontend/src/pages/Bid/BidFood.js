import Navbar from "../../components/Food/navbar/Navbar";
import Sidebar from "../../components/Food/sidebar/Sidebar";
import Feed from "../../components/bid/problemFeed/Feed";
import Rightbar from "../../components/Food/rightbar/Newright";
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
