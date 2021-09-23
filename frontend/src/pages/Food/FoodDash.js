import Navbar from "../../components/Food/navbar/Navbar";
import Sidebar from "../../components/Food/sidebar/Sidebar";
import Feed from "../../components/Food/feed/Feed";
// import Rightbar from "../../components/Food/rightbar/Rightbar";
import Rightbar from "../../components/Food/rightbar/Newright";
import "./foodDash.css"

// import Rightbar from "../../components/Food/Newright/Newright";


export default function FoodDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}