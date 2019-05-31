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
        filters: [
            { type: 'Name', label: 'Filter by Name', value: null },
            { type: 'Stars', label: 'Star rating', value: null, options: [ 
                {key: 1, label: '1 Star', value: false, count: null},
                {key: 2, label: '2 Stars', value: false, count: null},
                {key: 3, label: '3 Stars', value: false, count: null},
                {key: 4, label: '4 Stars', value: false, count: null},
                {key: 5, label: '5 Stars', value: false, count: null},
                {key: 0, label: 'Unrated', value: false, count: null},
            ]},

            { type: 'MinCost', label: 'Your budget', value: null, options: [ 
                { key: 206, label: "£206 - £1199 per night", range: [206, 1199], value: false, count: null },
                { key: 1201, label: "£1201 - £2499 per night", range: [1200, 2499], value: false, count: null },
                { key: 2500, label: "£2500 - £3999 per night", range: [2500, 3999], value: false, count: null },
                { key: 4000, label: "£4000 - £5499 per night", range: [4000, 5499], value: false, count: null },
                { key: 5500, label: "£5500 - £7000 per night", range: [5500, 7000], value: false, count: null },
            ]},
            { type: 'UserRatingCount', label: 'Trip Rating', value: null, options: [
                { key: 0, label: "0 - 162", range: [0, 162], value: false, count: null },
                { key: 163, label: "163 - 325", range: [163, 325], value: false, count: null },
                { key: 326, label: "326 - 487", range: [326, 487], value: false, count: null },
                { key: 488, label: "488 - 650", range: [488, 650], value: false, count: null },
            ]},
            { type: 'UserRating', label: 'User Rating', value: null, options: [
                { key: 1, label: "1 - 3", range: [1, 3], value: false, count: null },
                { key: 4, label: "4 - 7", range: [4, 7], value: false, count: null },
                { key: 8, label: "8 - 10", range: [8, 10], value: false, count: null },
            ]},
        ],
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

    filterAddedHandler = (filterType, key, value) => {
        let newFilters = [...this.state.filters];
        let newFilter = newFilters.find( f => f.type === filterType);
        let newOptions = [...newFilter.options];
        let option = newOptions.find( o => o.key === key );
        option.value = value;
        this.setState({ filters: newFilters });
    }
    
    onNameAdded = (value) => {
        console.log(value);
    }

    render() {
        return (
            <div className={[Classes.HotelSearch, 'grid'].join(' ')}>
                <div className="col-3"> 
                    <Filters 
                    filters={this.state.filters} 
                    filterAdded={(filterType, key, value) => this.filterAddedHandler(filterType, key, value)}
                    onNameAdded={value => this.onNameAdded(value)}
                    />
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadHotels : () => dispatch(action.establishmentsInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearch);