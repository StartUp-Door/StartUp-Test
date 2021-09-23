import Navbar from "../../components/Client/navbar/Navbar";
import Sidebar from "../../components/Client/sidebar/Sidebar";
import SearchPlant_Feed from "../../components/Client/feed/SearchPlant";
import Rightbar from "../../components/Client/rightbar/RightSearchPlant";
import "./clientDash.css"

export default function ClientDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <SearchPlant_Feed />
        <Rightbar/>
      </div>
    </div>
  );
}