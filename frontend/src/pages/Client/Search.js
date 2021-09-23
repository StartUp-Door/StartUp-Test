import Searchbar from "../../components/Client/search/Searchbar";
import Sidebar from "../../components/Client/sidebar/Sidebar";
import Feed from "../../components/Client/search/Feed";
import Rightbar from "../../components/Client/rightbar/Rightbar";
import "./clientDash.css"

export default function ClientDash() {
  return (
    <div>
      {/* <Searchbar /> */}
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  );
}