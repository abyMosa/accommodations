import React from 'react';
import classes from './Hotel.module.css';

const Hotel = (props) => {
    // console.log(props);
    let successAr = ['Great', 'Excellent', 'Very Good', 'Good', 'Exceptional', 'Magnificent', 'Spectacular',];
    let normalAr = ['Above Average', 'Average', ];

    let statusClass = successAr.includes(props.establishment.UserRatingTitle)? classes.Success: 
            normalAr.includes(props.establishment.UserRatingTitle)? classes.Warning
            : props.establishment.UserRatingTitle === 'Unrated'? classes.Unrated
            : classes.Error;

    let stars = [];
    for (let i = 0; i < props.establishment.Stars; i++) {
        stars.push( <div key={props.establishment.EstablishmentId+'star-'+i} className={classes.Star}>&#9733;</div> );
    }
    
    return (
        <div className={[classes.Hotel, 'rflex'].join(' ')}>
            <div className={[classes.ImgContainer, 'flexItem'].join(' ')}>
                <img src={props.establishment.ImageUrl} alt={props.establishment.Name}/>
            </div>
            <div className={classes.ContentContainer}>

                <div className={classes.HotelHeader}>
                    <div className={classes.TitleContainer}>
                        <div className={classes.HotelTitleWrap}>
                            <div className={classes.HotelTitle}>{props.establishment.Name}</div>
                            <div className={classes.StarsWrap}> <div className={classes.Stars}>{stars}</div> </div>
                        </div>
                        
                        <p className={classes.Location}>
                            <span className="bold"> {props.establishment.Location} </span>
                            <span className={classes.Distance}>({props.establishment.Distance.toFixed(2)} Miles away from center)</span>
                        </p>
                    </div>
                    

                    <div className={classes.UserRatingWrap}>
                        <div className={classes.ReviewContainer}>
                            <p className={[classes.RatingTitle, statusClass, 'ma-0'].join(' ')}> {props.establishment.UserRatingTitle} </p>
                            <p className={[classes.Small, 'ma-0'].join(' ')}> {props.establishment.UserRatingCount} { props.establishment.UserRatingCount === 1 ? "review" : "reviews"}</p>
                        </div>
                        <div className={[classes.UserRating].join(' ')}> <p>{props.establishment.UserRating}</p></div>
                    </div>

                </div>
                
                <div className={[classes.HotelDetails, "flex row wrap"].join(' ')}>
                    <div > <p>Type: {props.establishment.EstablishmentType}</p> </div>
                    <div>
                        <p className="mb-0 text-sm">Price per person</p>
                        <p className="ma-0"> <span className="heavy text-lg"> £{props.establishment.MinCost.toFixed(2)}</span><span> GBP</span></p>
                        <p className="ma-0 text-sm">Includes taxes and charges</p>
                    </div>
                </div>
                

            </div>
        </div>
    );
};

export default Hotel;