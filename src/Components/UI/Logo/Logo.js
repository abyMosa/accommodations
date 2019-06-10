import React from 'react';
// import { FlightTakeoff } from '@material-ui/icons';
import Classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={Classes.Logo}>
            {/* <FlightTakeoff /> */}
            <h3>FLIGHTS.COM</h3>
        </div>
    );
};

export default Logo;