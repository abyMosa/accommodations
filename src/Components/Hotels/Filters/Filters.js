import React, { Component } from 'react';
import Filter from './Filter/Filter';
import Classes from './Filters.module.css';
import Accordian from '../../UI/Accordian/Accordian';

class Filters extends Component {
    
    state = {
        filterObj:{ Name: "", Stars: null, MinCost: [], UserRatingCount: [], UserRating: [] },
        filters: [
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
    }

    shouldComponentUpdate(nextProps, nextState){
        return ( (this.state !== nextState) && (this.props !== nextProps) );
    }

    filterAddedHandler = (filterType, key, value) => {
        let newFilters = [...this.state.filters];
        let newFilter = newFilters.find( f => f.type === filterType);
        let newOptions = [...newFilter.options];
        let option = newOptions.find( o => o.key === key );
        option.value = value;
        
        let filterValue = this.setFilterValue( newFilter );
        newFilter.value = filterValue;

        let filterObj = this.mapFilterToObj(newFilters);
        this.setState({ filters: newFilters, filterObj: filterObj });
        this.props.onFilterEstablishments(filterObj);
    }

    nameChanged = (value) => {
        let filters = [...this.state.filters];
        let nameFilter = filters.find( f => f.type === "Name" );
        nameFilter.value = value;
        
        let filterObj = this.mapFilterToObj(filters);
        this.setState({filters: filters, filterObj: filterObj});
        this.props.onFilterEstablishments(filterObj);
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

    mapFilterToObj = (filters) => {
        let filtersObj = {}
        filters.forEach( filter => filtersObj[filter.type] = filter.value);
        return filtersObj;
    }

    render() {
        return (
            <div className={Classes.Filters}>
                <p className="ma-0 sec-title">Filter By:</p>
            
                <div>
                    {
                        this.state.filters.map( (filter) => {
                            return( 
                                <Accordian key={filter.type} label={filter.label}>
                                    <Filter 
                                    key={filter.type} 
                                    config={filter} 
                                    onNameAdded={(value) => this.nameChanged(value)} 
                                    onFilterAdded={(filterType, key, value) => this.filterAddedHandler(filterType, key, value)} 
                                    />
                                </Accordian>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Filters;