import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

function handleMobileMenuOpen(event) {
    // setMobileMoreAnchorEl(event.currentTarget);
  }


const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>

            
            <nav className={classes.DescktopOnly}>
                <Logo />
                {/* <NavigationItems /> */}
                <div>
                <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
                <IconButton edge="end" aria-owns='material-appbar' aria-haspopup="true" color="inherit" >
              <AccountCircle />
            </IconButton>
                </div>
            </nav>

        </header>

        
    );
};

export default Toolbar;