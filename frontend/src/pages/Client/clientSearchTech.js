import Navbar from "../../components/Client/navbar/Navbar";
import Sidebar from "../../components/Client/sidebar/Sidebar";
import SearchTech_Feed from "../../components/Client/feed/SearchTech";
import Rightbar from "../../components/Client/rightbar/RightSearchTech";
import "./clientDash.css"

export default function ClientDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <SearchTech_Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}