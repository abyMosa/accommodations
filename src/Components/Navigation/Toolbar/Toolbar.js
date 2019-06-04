import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../UI/Logo/Logo';
// import NavigationItems from '../NavigationItems/NavigationItems';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';

const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <nav className={classes.DescktopOnly}>
                <Logo />
                <div>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit">
                        <Badge badgeContent={17} color="secondary"> <NotificationsIcon /> </Badge>
                    </IconButton>
                    {/* <IconButton edge="end" aria-owns='material-appbar' aria-haspopup="true" color="inherit" >
                        <AccountCircle />
                    </IconButton> */}
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;