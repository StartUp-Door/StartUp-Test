import Navbar from "../../components/Client/Profile/navbar/Navbar";
import Sidebar from "../../components/Client/Profile/sidebar/Sidebar";
import Feed from "../../components/Client/Profile/rightbar/NewRight";
// import Rightbar from "../../components/Client/rightbar/Rightbar";
import "./profile.css"

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <div style={{marginTop: '20px', flex: 2.185}}><Sidebar /></div>
        <Feed/>
        {/* <Rightbar/> */}
      </div>
    </div>
  );
}