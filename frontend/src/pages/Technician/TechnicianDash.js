import Navbar from "../../components/Technician/navbar/Navbar";
import Sidebar from "../../components/Technician/sidebar/Sidebar";
import Feed from "../../components/Technician/feed/Feed";
import Rightbar from "../../components/Technician/rightbar/Rightbar";
import "./technicianDash.css"

export default function TechnicianDash() {
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