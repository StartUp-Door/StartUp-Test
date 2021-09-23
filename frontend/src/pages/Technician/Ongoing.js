import Navbar from "../../components/Technician/navbar/Navbar";
import Sidebar from "../../components/Technician/sidebar/Sidebar";
import Ongoing from "../../components/Technician/sidebar/ongoing/Ongoing";
import Rightbar from "../../components/Technician/rightbar/Rightbar";
import "./technicianDash.css"

export default function TechnicianDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Ongoing />
        {/* <Rightbar/> */}
      </div>
    </div>
  );
}