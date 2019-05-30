import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import SortingBtns from '../../Components/Hotels/SortingBtns/SortingBtns';
import Filters from '../../Components/Hotels/Filters/Filters';
import Hotels from '../../Components/Hotels/Hotels';
import Classes from './HotelSearch.module.css';


class HotelSearch extends Component {

    state = {
        filteredEstablishments: [],
        // filters: [
        //     { type: 'Name', label: 'Filter by Name', value: null },
        //     { type: 'Stars', label: 'Filter by rating', options: [ 
        //         {count: 0, label: 'Unrated', value: false}, 
        //         {count: 1, label: '1 Star', value: false}, 
        //         {count: 2, label: '2 Stars', value: false}, 
        //         {count: 3, label: '3 Stars', value: false}, 
        //         {count: 4, label: '4 Stars', value: false}, 
        //         {count: 5, label: '5 Stars', value: false}, 
        //     ], value: null },

        //     { type: 'MinCost', label: 'Your budget', options: [  ], value: null },
        //     { type: 'UserRatingCount', label: 'Trip Rating', options: [ ], value: null },
        //     { type: 'UserRating', label: 'User Rating', options: [ ], value: null },
        // ],
        sortCriteria: { Distance: false, Stars: false, TrpRating: false, UserRating: false, MinCost: false }
    }

    componentDidMount(){
        this.props.loadHotels();
    }

    sortingHandler = (e) => {
        let property = e.target.value;
        let value = this.state.sortCriteria[property];
        let sortCriteriaCopy = {...this.state.sortCriteria}
        sortCriteriaCopy = {
            ...sortCriteriaCopy,
            [property] : !value
        }
        this.setState({ sortCriteria : sortCriteriaCopy});
    }

    filterAddedHandler = (filterType, value) => {
        console.log(filterType, value);
    }

    render() {
        return (
            <div className={[Classes.HotelSearch, 'grid'].join(' ')}>
                <div className="col-3"> 
                    <Filters filters={this.props.filters} filterAdded={(filterType, value) => this.filterAddedHandler(filterType, value)}/>
                </div>
                <div className="col-9"> 
                    <SortingBtns propertyCount={this.props.establishments.length} criteria={this.state.sortCriteria} clicked={ this.sortingHandler }/> 
                    <Hotels establishments={this.props.establishments} loading={this.props.loading} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        establishments: state.establishments.establishments,
        loading: state.establishments.loading,
        filters: state.establishments.filters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadHotels : () => dispatch(action.establishmentsInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearch);