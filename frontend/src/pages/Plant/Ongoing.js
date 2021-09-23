import Navbar from "../../components/Plant/navbar/Navbar";
import Sidebar from "../../components/Plant/sidebar/Sidebar";
import Ongoing from "../../components/Plant/sidebar/ongoing/Ongoing";
// import Rightbar from "../../components/Technician/rightbar/Rightbar";
import "./plantDash.css"

export default function TechnicianDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div style={{marginTop: 20, flex: 2.2}}><Sidebar /></div>
        <Ongoing />
        {/* <Rightbar/> */}
      </div>
    </div>
  );
}