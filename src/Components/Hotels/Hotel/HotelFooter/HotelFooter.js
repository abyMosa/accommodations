import React from 'react';
import Btn from '../../../UI/Btn/Btn';
import Row from '../../../UI/Grid/Row/Row';
import Col from '../../../UI/Grid/Col/Col';

const HotelFooter = (props) => {
    return (
        <Row gutter1>
            <Col lg6> <p className="mt-2">Type: {props.establishment.EstablishmentType}</p> </Col>
            
            <Col lg6>
                <div className="text-align-lg-r">
                    <p className="ma-0 text-sm">Price for two adults</p>
                    <p className="ma-0"> <span className="heavy text-lg"> £{props.establishment.MinCost.toFixed(2)}</span><span> GBP</span></p>
                    <p className="ma-0 text-sm mb-2">Includes taxes and charges</p>
                    <Btn primary lg>See availability</Btn>
                </div>
            </Col>
        </Row>
    );
};

export default React.memo(HotelFooter);