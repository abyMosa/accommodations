import React from 'react';
import classes from './Hotel.module.css';

const Hotel = (props) => {
    // console.log(props);
    return (
        <div className={[classes.Hotel, 'rflex'].join(' ')}>
            <div className={[classes.HotelImgContainer, 'flexItem'].join(' ')}>
                <img src={props.establishment.ImageUrl} alt={props.establishment.Name}/>
            </div>
        </div>
    );
};

export default Hotel;