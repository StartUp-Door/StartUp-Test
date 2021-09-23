import React,{useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import UpdateIcon from '@material-ui/icons/Update';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import NaturePeopleIcon from '@material-ui/icons/NaturePeople';

import { Link } from "react-router-dom";

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: 'white',
    '&:hover > $content': {
      backgroundColor: '#8898AA',
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: '#8898AA',
      color: 'black',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
  },
  content: {
    color: 'cecece',
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    // height: 264,
    flexGrow: 1,
    // maxWidth: 450,
  },
});

export default function GmailTreeView() {
  const classes = useStyles();
  const [tech,setTech] = useState('')
  const [plant,setPlant] = useState('')
  const [food,setFood] = useState('')
  const id1 = localStorage.cid
  useEffect(()=>{
    fetch(`http://localhost:4000/plan/route/${id1}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
    //  {technician,plant,0}
       if(data[0].category[0] === 'technician'){
        setTech(`/${data[0].category[0]}`)
       }else{
         setTech('/nosubscribe')
       }
       if(data[0].category[1] === 'plant'){
        setPlant(`/${data[0].category[1]}`)
       }else{
         setPlant('/nosubscribe')
       }

       if(data[0].category[2] === 'food'){
        setFood(`/${data[0].category[2]}`)
       }else{
        setFood('/nosubscribe')
       }      
    })
  },[])
  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText="Job Categories" labelIcon={WorkRoundedIcon}>
      <Link to={`${tech}`} style={{textDecoration:'none'}}><StyledTreeItem
          nodeId="7"
          labelText="Technician"
          labelIcon={SupervisorAccountIcon}
          labelInfo=""
          color="#1a73e8"
          bgColor="#e8f0fe"
        /> </Link>
        <Link to={`${food}`}  style={{textDecoration:'none'}}><StyledTreeItem
          nodeId="8"
          labelText="Food & Cuisine"
          labelIcon={FastfoodIcon}
          labelInfo=""
          color="#e3742f"
          bgColor="#fcefe3"
        /></Link>
        <Link to={`${plant}`} style={{textDecoration:'none'}}><StyledTreeItem
          nodeId="9"
          labelText="Plants and Crops"
          labelIcon={NaturePeopleIcon}
          labelInfo=""
          color="#a250f5"
          bgColor="#f3e8fd"
        /></Link>
      </StyledTreeItem>
      <StyledTreeItem nodeId="2" labelText="View Feedbacks" labelIcon={FeedbackIcon} />
      <StyledTreeItem nodeId="3" labelText="Completed Works" labelIcon={CheckCircleIcon} />
      <Link to="/ongoingFood" style={{textDecoration:'none'}}><StyledTreeItem nodeId="4" labelText="Ongoing Works" labelIcon={UpdateIcon} /></Link>
      <StyledTreeItem nodeId="5" labelText="Questions" labelIcon={LiveHelpIcon} />
      {/* <Link to="/table"><StyledTreeItem nodeId="6" labelText="Table" labelIcon={LiveHelpIcon} /></Link> */}
    </TreeView>
  );
}