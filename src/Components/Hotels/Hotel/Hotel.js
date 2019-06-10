import React, { PureComponent } from 'react';
import classes from './Hotel.module.css';
import HotelHeader from './HotelHeader/HotelHeader';
import HotelFooter from './HotelFooter/HotelFooter';
import Container from '../../UI/Grid/Container/Container';
import Row from '../../UI/Grid/Row/Row';
import Col from '../../UI/Grid/Col/Col';


class Hotel extends PureComponent {
    render() {
        return (
            <Container className={[classes.Hotel, 'pa-4'].join(' ')}>
                <Row gutter1>
                    <Col md4>
                        <img src={this.props.establishment.ImageUrl} alt={this.props.establishment.Name}/>
                    </Col>
                    <Col md8>
                        <HotelHeader establishment={this.props.establishment}/>
                        <HotelFooter establishment={this.props.establishment}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Hotel;