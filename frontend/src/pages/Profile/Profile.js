import Navbar from "../../components/Profile/navbar/Navbar";
import Sidebar from "../../components/Profile/sidebar/Sidebar";
import Feed from "../../components/Profile/feed/Feed";
import Rightbar from "../../components/Profile/rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
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