
import { Link } from "react-router-dom";

import "./sidebar2.css";
// import StarsIcon from '@material-ui/icons/Stars';
// import PaymentIcon from '@material-ui/icons/Payment';
// import UpdateIcon from '@material-ui/icons/Update';
import DescriptionIcon from '@material-ui/icons/Description';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';

import FastfoodIcon from '@material-ui/icons/Fastfood';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

export default function Sidebar() {
  return (
    <div>
    <div className="sidebarnew">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeRoundedIcon className="sidebarIcon" />
            <Link to="/client" style={{textDecoration: 'none', hover: 'none'}}><span className="sidebarListItemText">Home </span></Link>
          </li>
          <li className="sidebarListItem">
            <SupervisorAccountIcon className="sidebarIcon" />
            <Link to="/SearchTech" style={{textDecoration: 'none', hover: 'none'}}><span className="sidebarListItemText">Technician </span></Link>
          </li>
          <li className="sidebarListItem">
            <FastfoodIcon className="sidebarIcon" />
            <Link to="/SearchFood" style={{textDecoration: 'none', hover: 'none'}}><span className="sidebarListItemText">Food & Cuisine</span></Link>
          </li>
          <li className="sidebarListItem">
            <NaturePeopleIcon className="sidebarIcon" />
            <Link to="/SearchPlant" style={{textDecoration: 'none', hover: 'none'}}><span className="sidebarListItemText">Plants & Crops</span></Link>
          </li>
          <li className="sidebarListItem">
            <DescriptionIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Generate Reports</span>
          </li>
          <li className="sidebarListItem">
            <LiveHelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
        </ul>
      </div>
    </div>
    {/* <div className="sidebar2">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
       
        <li className="sidebarListItem">
          <StarsIcon className="sidebarIcon" />
          <span className="sidebarListItemText">View Ratings and Feedback</span>
        </li>
        <li className="sidebarListItem">
          <PaymentIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Verify Payment</span>
        </li>
        <li className="sidebarListItem">
          <UpdateIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Upgrade Membership</span>
        </li>
        <li className="sidebarListItem">
          <DescriptionIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Generate Reports</span>
        </li>
        <li className="sidebarListItem">
          <LiveHelpIcon className="sidebarIcon" />
          <span className="sidebarListItemText">Questions</span>
        </li>
      </ul>
    </div>
  </div> */}
  </div>
  );
}

