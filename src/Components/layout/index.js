import React, { useState, useEffect } from 'react'
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import SettingsIcon from "@material-ui/icons/Settings";
import Logomain  from '@/assets/images/mainten.svg';
import mss  from '@/assets/images/ms4m.svg';
import Logomarcobre  from '@/assets/images/marcobre.svg';
import Avatar from '@material-ui/core/Avatar';
import { Router, Link, Redirect, navigate } from "@reach/router"

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  appBar: {
    height: 70
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  logo: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%"
  },
  leftlogo: {
    position: "absolute",
    transform: "translate(-34%)",
  },
  logocalibr: {
    position: "absolute",
    left: "42%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%"
  },
  logocalibr2:{
    position: "absolute",
    left: "51%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%"
  },
  logo2: {
    top: "50%",
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(2)
  },
  avatar:{
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  customBadge: {
    backgroundColor: "#FF2020",
  }
}));
export const Layout = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [username, setUsername] = React.useState(null)

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    // Update the document title using the browser API
    //localStorage.removeItem('_token');
    let token = localStorage.getItem('_token')
    if(token == null){
      navigate("/")
    }
    setUsername(localStorage.getItem('username').substring(0,2));

  },[]);


  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleCloseSesion = ()=>{
    navigate("/logOut")
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleCloseSesion}>Cerrar Sesión</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <p>Configuracion</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
    <div className={classes.grow}>
      <AppBar position="static" style={{ background: "#00122C" }} className={classes.appBar}>
        <Toolbar>
          <img
            src={mss}
            alt="logo"
            className={classes.leftlogo}
          />
          <img
            src={Logomain}
            alt="log"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <IconButton color="inherit">
              <SettingsIcon />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <div className={classes.root}>
              <Badge classes={{badge:classes.customBadge}} variant="dot">
              <Avatar className={classes.avatar} style={{ fontSize: '14px' }}>{username}</Avatar>
              </Badge>
              </div>
            </IconButton>
            <img src={Logomarcobre} alt="marcobre" className={classes.logo2}/>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              edge="end"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {/*<AppBar position="static" style={{ background: "#FFFFFF" }} className={classes.appBar}>
      <Toolbar>
      <img
            src={gpslogo}
            alt="log"
            className={classes.logo}
          />
          />
      </Toolbar>
  </AppBar>*/}
      {renderMobileMenu}
      {renderMenu}
    </div>
    { props.children }
    </>
  );
}
