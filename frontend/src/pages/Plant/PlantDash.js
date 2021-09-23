import Navbar from "../../components/Plant/navbar/Navbar";
import Sidebar from "../../components/Plant/sidebar/Sidebar";
import Feed from "../../components/Plant/feed/Feed";
import Rightbar from "../../components/Plant/rightbar/Rightbar";
import "./plantDash.css"

export default function PlantDash() {
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