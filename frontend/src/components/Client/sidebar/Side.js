import React from 'react';
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
    fontSize: '100px',
    color: 'black',
    '&:hover > $content': {
      backgroundColor: '#8898AA',
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: '#8898AA',
      color: '#004dff',
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
    height: 264,
    flexGrow: 1,
    maxWidth: 450,
  },
});

export default function GmailTreeView() { 
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['3']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText="Client function 1" labelIcon={WorkRoundedIcon}>
      <Link to="/technician" style={{textDecoration:'none'}}><StyledTreeItem
          nodeId="7"
          labelText="Technician"
          labelIcon={SupervisorAccountIcon}
          labelInfo=""
          color="#1a73e8"
          bgColor="#e8f0fe"
        /> </Link>
        <Link to="/food" style={{textDecoration:'none'}}><StyledTreeItem
          nodeId="8"
          labelText="Food & Cuisine"
          labelIcon={FastfoodIcon}
          labelInfo=""
          color="#e3742f"
          bgColor="#fcefe3"
        /></Link>
        <Link to="/plant" style={{textDecoration:'none'}}><StyledTreeItem
          nodeId="9"
          labelText="Plants and Crops"
          labelIcon={NaturePeopleIcon}
          labelInfo=""
          color="#a250f5"
          bgColor="#f3e8fd"
        /></Link>
      </StyledTreeItem>
      <StyledTreeItem nodeId="2" labelText="Client function 2" labelIcon={FeedbackIcon} />
      <StyledTreeItem nodeId="3" labelText="Client function 3" labelIcon={CheckCircleIcon} />
      <StyledTreeItem nodeId="4" labelText="Client function 4" labelIcon={UpdateIcon} />
      <StyledTreeItem nodeId="5" labelText="Questions" labelIcon={LiveHelpIcon} />
    </TreeView>
  );
}