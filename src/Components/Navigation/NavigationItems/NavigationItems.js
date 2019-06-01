import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/search" >Hotels</NavigationItem>
            <NavigationItem link="/" exact>Home</NavigationItem>
        </ul>
    );
};

export default NavigationItems;