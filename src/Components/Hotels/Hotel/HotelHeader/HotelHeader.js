import React from 'react';
import Classes from './HotelHeader.module.css';
import Row from '../../../UI/Grid/Row/Row';
import Col from '../../../UI/Grid/Col/Col';

const HotelHeader = (props) => {

    let successAr = ['Great', 'Excellent', 'Very Good', 'Good', 'Exceptional', 'Magnificent', 'Spectacular',];
    let normalAr = ['Above Average', 'Average', ];

    let statusClass = successAr.includes(props.establishment.UserRatingTitle)? Classes.Success: 
            normalAr.includes(props.establishment.UserRatingTitle)? Classes.Warning
            : props.establishment.UserRatingTitle === 'Unrated'? Classes.Unrated
            : Classes.Error;


    let stars = [];
    for (let i = 0; i < props.establishment.Stars; i++) {
        stars.push( <div key={props.establishment.EstablishmentId+'star-'+i} className={Classes.Star}>&#9733;</div> );
    }

    return (
        <Row>
            <Col lg8 className="f-fd-column">
                <Row className="f-aa-center f-jc-start">
                    <div className={[Classes.HotelTitle, "pr-2 thin"].join(' ')}>{props.establishment.Name}</div>
                    <div className={Classes.StarsWrap}> <div className={Classes.Stars}>{stars}</div> </div>
                </Row>

                <p className="mt-2">
                    <span className="bold"> {props.establishment.Location} </span>
                    <span>({props.establishment.Distance.toFixed(2)} Miles away from center)</span>
                </p>
            </Col>
            <Col lg4>
                <Row className="mb-2">
                    <Col xs8>
                        <div className="text-align-lg-r">
                            <p className={[Classes.RatingTitle, statusClass, 'ma-0'].join(' ')}> {props.establishment.UserRatingTitle} </p>
                            <p className="ma-0 text-sm"> {props.establishment.UserRatingCount} { props.establishment.UserRatingCount === 1 ? "review" : "reviews"}</p>
                        </div>
                    </Col>
                    <Col xs4 className={Classes.UserRating}>
                        <div className="text-align-sm-r">
                            <p>{props.establishment.UserRating}</p>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default React.memo(HotelHeader);