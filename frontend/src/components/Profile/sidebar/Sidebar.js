import "./sidebar.css";
import StarsIcon from '@material-ui/icons/Stars';
import PaymentIcon from '@material-ui/icons/Payment';
import UpdateIcon from '@material-ui/icons/Update';
import DescriptionIcon from '@material-ui/icons/Description';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import { Link } from "react-router-dom";

export default function Sidebar() {
       const id = localStorage.cid
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <StarsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">View Ratings and Feedback</span>
          </li>
          <li className="sidebarListItem">
            <PaymentIcon className="sidebarIcon" />
            <span className="sidebarListItemText"><Link to={{pathname:`/monthlypayment/${id}`}} style={{textDecoration: 'none', hover: 'none', color:'white'}}>Verify Payment</Link></span>
          </li>
          <li className="sidebarListItem">
            <UpdateIcon className="sidebarIcon" />
            <span className="sidebarListItemText"><Link to={{pathname:`/subcription/${id}`}} style={{textDecoration: 'none', hover: 'none', color:'white'}}>Upgrade Membership</Link></span>
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
  );
}
