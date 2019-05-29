import React from 'react';
import classes from './Hotel.module.css';

const Hotel = (props) => {
    // console.log(props);
    return (
        <div className={[classes.Hotel, 'rflex'].join(' ')}>
            <div className={[classes.ImgContainer, 'flexItem'].join(' ')}>
                <img src={props.establishment.ImageUrl} alt={props.establishment.Name}/>
            </div>
            <div className={classes.ContentContainer}>
                <h3>{props.establishment.Name}</h3>
                <div className={classes.Stars}>{props.establishment.Stars}</div>
                <p>
                    <span> {props.establishment.Location} </span>
                    <span>( {props.establishment.Distance.toFixed(2)} Miles away from center )</span>
                </p>
            </div>

            <div className={classes.PriceContainer}>
                <p> {props.establishment.UserRatingTitle} </p>
                <p> {props.establishment.UserRatingCount} </p>
            </div>
            <div className={classes.UserRating}>{props.establishment.UserRating}</div>
        </div>
    );
};

export default Hotel;