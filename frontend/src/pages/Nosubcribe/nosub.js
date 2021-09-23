import Navbar from "../../components/Nosubscribe/navbar/Navbar";
import Sidebar from "../../components/Nosubscribe/sidebar/Sidebar";
import Feed from "../../components/Nosubscribe/feed/Feed";
import Rightbar from "../../components/Plant/rightbar/Rightbar";
import "./plantDash.css"

export default function Nosub() {
  return (
    <div>
      <Navbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed/>
       
      </div>
    </div>
  );
}