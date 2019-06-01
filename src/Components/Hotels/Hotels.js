import React, { Component } from 'react';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Classes from './Hotels.module.css';
import Hotel from './Hotel/Hotel';
import Pagination from '../Pagination/Pagination';

class Hotels extends Component {
    state = { currentEstablishments: [], currentPage: null, totalPages: null }

    onPageChanged = data => {
        const { establishments } = this.props;
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentEstablishments = establishments.slice(offset, offset + pageLimit);
        console.log('currentEstablishments', currentEstablishments);
        this.setState({ currentPage, currentEstablishments, totalPages });
    }

    render() {
        return (
            <div className={Classes.Hotels}>
                {
                    this.props.loading? <Spinner /> : 
                    this.state.currentEstablishments.map(est => {
                        return(
                            <Hotel key={est.EstablishmentId} establishment={est}/>
                        );
                    })
                }
                
                <Pagination totalRecords={this.props.establishments.length} pageLimit={10} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
        );
    }
}

export default Hotels;