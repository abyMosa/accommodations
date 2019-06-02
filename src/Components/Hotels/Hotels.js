import React, { Component } from 'react';
import Spinner from '../../Components/UI/Spinner/Spinner';
import Classes from './Hotels.module.css';
import Hotel from './Hotel/Hotel';
import Pagination from '../Pagination/Pagination';

class Hotels extends Component {
    state = { currentEstablishments: [], currentPage: null, totalPages: null, pageLimit: 10 }

    componentWillReceiveProps(nextProps){
        if(nextProps.establishments !== this.props.establishments){
            const [...establishments] = nextProps.establishments;
            const currentEstablishments = establishments.slice(0, 10);
            this.setState({ currentEstablishments});
        }
    }

    onPageChanged = data => {
        const { establishments } = this.props;
        const { currentPage, totalPages, pageLimit } = data;
    
        const offset = (currentPage - 1) * pageLimit;
        const currentEstablishments = establishments.slice(offset, offset + pageLimit);
        this.setState({ currentPage, currentEstablishments, totalPages });
    }

    render() {
        console.log('[render]', this.props.establishments.length > 0? this.props.establishments[0].EstablishmentId : 'less than zero');


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
                <Pagination totalRecords={this.props.establishments.length} pageLimit={this.state.pageLimit} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
        );
    }
}

export default Hotels;