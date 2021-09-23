import Navbar from "../../components/Client/navbar/Navbar";
import Sidebar from "../../components/Client/sidebar/Sidebar";
import SearchFood_Feed from "../../components/Client/feed/SearchFood";
import Rightbar from "../../components/Client/rightbar/RightSearchFood";
import "./clientDash.css"

export default function ClientDash() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <SearchFood_Feed />
        <Rightbar/>
      </div>
    </div>
  );
}