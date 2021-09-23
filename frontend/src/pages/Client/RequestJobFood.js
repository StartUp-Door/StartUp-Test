import Navbar from "../../components/Client/navbar/Navbar";
import Sidebar from "../../components/Client/sidebar/Sidebar";
import RequesJobFood from '../../components/Client/request/Foodform';
import Rightbar from "../../components/Client/rightbar/Rightbar";
import "./clientDash.css"

export default function ClientDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <RequesJobFood />
        <Rightbar/>
      </div>
    </div>
  );
}