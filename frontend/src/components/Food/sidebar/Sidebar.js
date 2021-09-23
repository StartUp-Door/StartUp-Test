import "./sidebar.css";
// import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
// import FeedbackIcon from '@material-ui/icons/Feedback';
// import CheckCircleIcon from '@material-ui/icons/CheckCircle';
// import UpdateIcon from '@material-ui/icons/Update';
// import LiveHelpIcon from '@material-ui/icons/LiveHelp';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import Side from './Side'

export default function Sidebar() {
  return (
    <div className="sidebar123">
      <div className="sidebarWrapper123">
        <Side />
        {/* <ul className="sidebarList">
          <li className="sidebarListItem">
            <WorkRoundedIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Job Categories</span>
          </li>
          <li className="sidebarListItem">
            <FeedbackIcon className="sidebarIcon" />
            <span className="sidebarListItemText">View Feedbacks</span>
          </li>
          <li className="sidebarListItem">
            <CheckCircleIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Completed Works</span>
          </li>
          <li className="sidebarListItem">
            <UpdateIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Ongoing Works</span>
          </li>
          <li className="sidebarListItem">
            <PeopleAltIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Disscuss Questions</span>
          </li>
          <li className="sidebarListItem">
            <LiveHelpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Help</span>
          </li>
        </ul> */}
        {/* <button className="sidebarButton"><span>Show More</span></button> */}
      </div>
    </div>
  );
}
