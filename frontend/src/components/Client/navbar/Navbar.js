import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import { deepPurple} from '@material-ui/core/colors';

import { useEffect, useState } from "react";

import Pro from './Pro';
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import ProfileNoti from './ProfileNoti';

const useStyles = makeStyles((theme) => ({
  
  grow: {
    flexGrow: 1,
    position:'sticky'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    fontSize: 30,
    // fontWeight: 4000,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
      // color: theme.palette.getContrastText(deepPurple[500]),
      // backgroundColor: deepPurple[500],
    },
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(2),
    width: '10%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(26.5),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '56ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      // paddingRight: theme.spacing(10),
    },
  },
  sectionMobile: {
    display: 'flex',
    marginLeft: theme.spacing(0),
    // paddingRight: theme.spacing(1000),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function PrimarySearchAppBar() {

  const [Notification, setNotification] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/client/clientNotification/1')
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data)
        setNotification(data);
      })
  }, [])
  console.log(Notification);
  
  const [route1,setRoute] = useState('client')

  const id1 = localStorage.cid
//  const dd = "client"
  useEffect(()=>{
    fetch(`http://localhost:4000/plan/route/${id1}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      if(data[0].category[0].length > 0 ){
        setRoute(data[0].category[0])
         
      }else{
        setRoute(id1)    
      } 
    })
  },[])
  
  const [notifromTech, setnotifromTech] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/client/NotificationTech/${id1}`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data)
        setnotifromTech(data);
      })
  }, [])
  console.log(notifromTech);

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [mobileMoreAnchorEl1, setMobileMoreAnchorEl1] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const isMenuOpen1 = Boolean(anchorEl1);
  const isMobileMenuOpen1 = Boolean(mobileMoreAnchorEl1);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuOpen1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuClose1 = () => {
    setMobileMoreAnchorEl1(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMenuClose1 = () => {
    setAnchorEl1(null);
    handleMobileMenuClose1();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const noti = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><Link to="/Clientprofile" style={{textDecoration:"none", color:"black"}}>Profile</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}><Link to={`/${route1}`} style={{textDecoration:"none", color:"black"}}>Switch to Service Provider</Link></MenuItem>
      <MenuItem onClick={handleMenuClose}>Log Out</MenuItem>
    </Menu>
  );

  const notification = (
    <Menu
      anchorEl={anchorEl1}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={noti}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen1}
      onClose={handleMenuClose1}
    >
      {/* {Notification && Notification.map((noti) => (
        <div key={noti.n_id}>
          <MenuItem onClick={handleMenuClose1}>{noti.noti} <br/> <div style={{fontSize:11, paddingLeft:10, fontWeight:500}}> {format(noti.created_on)} </div> </MenuItem>
          <hr/>
        </div>
      ))} */}
      {notifromTech && notifromTech.map((noti) => ( 
        <div key={noti.id} style={{paddingRight: 5}}>
          <MenuItem onClick={handleMenuClose1}> 

            <div>

              <div style={{fontWeight: 'bold', textAlign:'center', alignItems:'center', paddingBottom: 5}} >
                <span><MonetizationOnRoundedIcon />Accepted Your Job Request </span>
              </div>

              <ProfileNoti noti={noti} />                

            </div>        
            
          </MenuItem>
          <hr/>
        </div>
      ))}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} style={{position: '-webkit-sticky' , position: 'sticky', top: 0}}>
      <AppBar position="static" style={{backgroundColor:"#1A2A4A"}}>
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title} variant="h6" >
            Startup Door
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search for a Service Provider here…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 2 new mails" color="inherit" style={{marginRight:'70px'}}>
              <Badge badgeContent={2} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 4 new notifications" aria-controls={noti} onClick={handleProfileMenuOpen1} color="inherit" style={{marginRight:'70px'}}>
              <Badge badgeContent={notifromTech && notifromTech.length} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {/* <Avatar className={classes.root} src="../../../assets/person/1.jpeg" /> */}
              <Pro />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            {/* <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton> */}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {notification}
    </div>
  );
}
