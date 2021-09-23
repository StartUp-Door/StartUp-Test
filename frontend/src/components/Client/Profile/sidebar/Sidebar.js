import "./sidebar1.css";
import StarsIcon from '@material-ui/icons/Stars';
import PaymentIcon from '@material-ui/icons/Payment';
import UpdateIcon from '@material-ui/icons/Update';
import DescriptionIcon from '@material-ui/icons/Description';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import PublicIcon from '@material-ui/icons/Public';
import WorkIcon from '@material-ui/icons/Work';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

import { Link } from 'react-router-dom'

export default function Sidebar() {
  const id = localStorage.cid
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <HomeRoundedIcon className="sidebarIcon" />
            <Link to="/client" style={{textDecoration: 'none', hover: 'none'}}><span className="sidebarListItemText">Home </span></Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/Clientprofile" style={{textDecoration: 'none', color: 'black'}}><PublicIcon className="sidebarIcon" /><span className="sidebarListItemText">View Global Job Requests</span></Link>
          </li>
          <li className="sidebarListItem">
            <Link to="/privateRequest" style={{textDecoration: 'none', color: 'black'}}><WorkIcon className="sidebarIcon" />
            <span className="sidebarListItemText">View Private Job Requests</span></Link>
          </li>
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
          <li className="sidebarListItem">
            <PersonRoundedIcon className="sidebarIcon" /><Link to="/portfolio/client" style={{textDecoration: 'none', color: 'black'}}><span className="sidebarListItemText">Update Portfolio</span></Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
