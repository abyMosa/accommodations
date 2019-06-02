import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import Filters from '../../Components/Hotels/Filters/Filters';
import Hotels from '../../Components/Hotels/Hotels';
import Classes from './HotelSearch.module.css';
import SortSection from '../../Components/Hotels/SortSection/SortSection';
import * as utility from '../../store/utility';

class HotelSearch extends Component {

    state = {
        filteredEstablishments: [],
        filters:{ Name: "", Stars: null, MinCost: [], UserRatingCount: [], UserRating: [] },
        filtersData: [
            { type: 'Name', label: 'Filter by Name', value: null },
            { type: 'Stars', label: 'Star rating', value: [], options: [ 
                {key: 1, label: '1 Star', value: false, count: null},
                {key: 2, label: '2 Stars', value: false, count: null},
                {key: 3, label: '3 Stars', value: false, count: null},
                {key: 4, label: '4 Stars', value: false, count: null},
                {key: 5, label: '5 Stars', value: false, count: null},
                {key: 0, label: 'Unrated', value: false, count: null},
            ]},

            { type: 'MinCost', label: 'Your budget', value: [], options: [ 
                { key: 206, label: "£206 - £1199", range: [206, 1199], value: false, count: null },
                { key: 1201, label: "£1201 - £2499", range: [1200, 2499], value: false, count: null },
                { key: 2500, label: "£2500 - £3999", range: [2500, 3999], value: false, count: null },
                { key: 4000, label: "£4000 - £5499", range: [4000, 5499], value: false, count: null },
                { key: 5500, label: "£5500 - £7000", range: [5500, 7000], value: false, count: null },
            ]},
            { type: 'UserRatingCount', label: 'Trip Rating', value: [], options: [
                { key: 0, label: "0 - 162 reviews", range: [0, 162], value: false, count: null },
                { key: 163, label: "163 - 325 reviews", range: [163, 325], value: false, count: null },
                { key: 326, label: "326 - 487 reviews", range: [326, 487], value: false, count: null },
                { key: 488, label: "488 - 650 reviews", range: [488, 650], value: false, count: null },
            ]},
            { type: 'UserRating', label: 'User Rating', value: [], options: [
                { key: 0, label: "0 - 3", range: [0, 3], value: false, count: null },
                { key: 4, label: "4 - 7", range: [4, 7], value: false, count: null },
                { key: 8, label: "8 - 10", range: [8, 10], value: false, count: null },
            ]},
        ],
        sort: {
            value: null,
            options: [ 
                { key: '', label: 'Select an option', order: '', selected: false },
                { key: 'Distance', label: 'Distance', order: 'ASC', selected: false },
                { key: 'Stars', label: 'Star ratings', order: 'DESC', selected: false },
                { key: 'UserRatingCount', label: 'Trip rating', order: 'DESC', selected: false },
                { key: 'UserRating', label: 'User rating', order: 'DESC', selected: false },
                { key: 'MinCost', label: 'Budget', order: 'ASC', selected: false },
            ]
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.establishments !== this.props.establishments){
            let establishments = [...nextProps.establishments];
            this.setState({filteredEstablishments: establishments});
        }
    }

    componentDidMount(){
        this.props.loadHotels();
    }

    sortFilteredEstablishments = (sort, filteredEstablishments = null) => {
        if(!sort.value || sort.value.length === 0 )
            return;

        let selectedOption = sort.options.find(option => option.key === sort.value);
        filteredEstablishments = filteredEstablishments? filteredEstablishments: [ ...this.state.filteredEstablishments ];
        filteredEstablishments.sort( (a,b) => {
            return (selectedOption.order === "ASC")? a[selectedOption.key] - b[selectedOption.key] : b[selectedOption.key] - a[selectedOption.key];
        } );
        this.setState({ filteredEstablishments });
    }   

    setFilteredEstablishments = (filters) => {
        let establishments = [...this.props.establishments];
        let filteredEstablishments = establishments.filter( hotel => {
            var result = true;
            for (let key in filters) {
                switch (key) {
                    case "Name": if(filters.Name && hotel.Name.toLowerCase().indexOf(filters.Name.toLowerCase()) < 0){ result = false }; break;
                    case "Stars": if(Array.isArray(filters.Stars) && filters.Stars.length > 0 && !filters.Stars.includes(hotel.Stars) ){ result = false }; break;
                    case "UserRating": if( Array.isArray(filters.UserRating) && filters.UserRating.length > 0 && !utility.IsNumberInAnyRanges(hotel.UserRating, filters.UserRating) ){ result = false }; break;
                    case "UserRatingCount": if( Array.isArray(filters.UserRatingCount) && filters.UserRatingCount.length > 0 && !utility.IsNumberInAnyRanges(hotel.UserRatingCount, filters.UserRatingCount) ){ result = false }; break;
                    case "MinCost": if( Array.isArray(filters.MinCost) && filters.MinCost.length > 0 && !utility.IsNumberInAnyRanges(hotel.MinCost, filters.MinCost) ){ result = false }; break;
                    default: if( Array.isArray(filters[key]) && filters[key].length > 0 && !utility.IsNumberInAnyRanges(hotel[key], filters[key]) ){ result = false }; break;
                }   
            }
            return result;
        } );
        console.log('filteredEstablishments', filteredEstablishments.length);
        this.setState({ filteredEstablishments });
        this.sortFilteredEstablishments(this.state.sort, filteredEstablishments);
    }

    handleSortChange = (key) => {
        let newSort = { ...this.state.sort };
        let options = [...this.state.sort.options];

        options.map(option => {
            if(option.key === key){ option.selected = true; }
            else{ option.selected = false; }
            return option;
        });
        let updatedSort = { ...newSort, options, value: key };
        console.log(updatedSort)
        this.setState({ sort : updatedSort });
        this.sortFilteredEstablishments(updatedSort);
    }

    filterAddedHandler = (filterType, key, value) => {
        let newFilters = [...this.state.filtersData];
        let newFilter = newFilters.find( f => f.type === filterType);
        let newOptions = [...newFilter.options];
        let option = newOptions.find( o => o.key === key );
        option.value = value;
        
        let filterValue = this.setFilterValue( newFilter );
        newFilter.value = filterValue;

        let filtersObj = this.mapFilterToObj(newFilters);
        this.setState({ filtersData: newFilters, filters: filtersObj });
        this.setFilteredEstablishments(filtersObj);
    }
    
    onNameChanged = (value) => {
        let filters = [...this.state.filtersData];
        let nameFilter = filters.find( f => f.type === "Name" );
        nameFilter.value = value;
        
        let filtersObj = this.mapFilterToObj(filters);
        this.setState({filtersData: filters, filters: filtersObj});
        this.setFilteredEstablishments(filtersObj);

    }
    mapFilterToObj = (filters) => {
        let filtersObj = {}
        filters.forEach( filter => filtersObj[filter.type] = filter.value);
        return filtersObj;
    }
    setFilterValue = (filter) => {
        let value = [];
        filter.options.forEach(option => {
            switch (filter.type) {
                case "Stars": if(option.value){value.push(option.key)} break;
                case "UserRating": if(option.value){ value.push(option.range)} break;
                case "UserRatingCount": if(option.value){ value.push(option.range)} break;
                case "MinCost": if(option.value){ value.push(option.range)} break;
                default: if(option.value){ value.push(option.range)} break;
            }
        });
        return value;
    }

    render() {
        return (
            <div className={[Classes.HotelSearch, 'grid'].join(' ')}>
                <div className="col-3"> 
                    <Filters 
                    filters={this.state.filtersData} 
                    filterAdded={(filterType, key, value) => this.filterAddedHandler(filterType, key, value)}
                    onNameAdded={value => this.onNameChanged(value)}
                    />
                </div>
                <div className="col-9"> 
                    <SortSection sort={this.state.sort}  propertyCount={this.state.filteredEstablishments.length} handleChange={value =>  this.handleSortChange(value)}/>
                    <Hotels establishments={this.state.filteredEstablishments} loading={this.props.loading} />
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