import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import Filters from '../../Components/Hotels/Filters/Filters';
import Hotels from '../../Components/Hotels/Hotels';
import Classes from './HotelSearch.module.css';
import SortSection from '../../Components/Hotels/SortSection/SortSection';


class HotelSearch extends Component {

    state = {
        filteredEstablishments: [],
        filters: [
            { type: 'Name', label: 'Filter by Name', value: null },
            { type: 'Stars', label: 'Star rating', value: 1, options: [ 
                {key: 1, label: '1 Star', value: false, count: null},
                {key: 2, label: '2 Stars', value: false, count: null},
                {key: 3, label: '3 Stars', value: false, count: null},
                {key: 4, label: '4 Stars', value: false, count: null},
                {key: 5, label: '5 Stars', value: false, count: null},
                {key: 0, label: 'Unrated', value: false, count: null},
            ]},

            { type: 'MinCost', label: 'Your budget', value: null, options: [ 
                { key: 206, label: "£206 - £1199", range: [206, 1199], value: false, count: null },
                { key: 1201, label: "£1201 - £2499", range: [1200, 2499], value: false, count: null },
                { key: 2500, label: "£2500 - £3999", range: [2500, 3999], value: false, count: null },
                { key: 4000, label: "£4000 - £5499", range: [4000, 5499], value: false, count: null },
                { key: 5500, label: "£5500 - £7000", range: [5500, 7000], value: false, count: null },
            ]},
            { type: 'UserRatingCount', label: 'Trip Rating', value: [0 - 162], options: [
                { key: 0, label: "0 - 162", range: [0, 162], value: false, count: null },
                { key: 163, label: "163 - 325", range: [163, 325], value: false, count: null },
                { key: 326, label: "326 - 487", range: [326, 487], value: false, count: null },
                { key: 488, label: "488 - 650", range: [488, 650], value: false, count: null },
            ]},
            { type: 'UserRating', label: 'User Rating', value: [8, 10], options: [
                { key: 1, label: "1 - 3", range: [1, 3], value: false, count: null },
                { key: 4, label: "4 - 7", range: [4, 7], value: false, count: null },
                { key: 8, label: "8 - 10", range: [8, 10], value: false, count: null },
            ]},
        ],
        sort: {
            value: null,
            options: [ 
                // { key: 'selectOption', label: 'Select an option', order: '', selected: false },
                { key: 'Distance', label: 'Distance', order: 'ASC', selected: false },
                { key: 'Stars', label: 'Star ratings', order: 'DESC', selected: false },
                { key: 'UserRatingCount', label: 'Trip rating', order: 'DESC', selected: false },
                { key: 'UserRating', label: 'User rating', order: 'DESC', selected: false },
                { key: 'MinCost', label: 'Budget', order: 'ASC', selected: false },
            ]
        }
    }

    // shouldComponentUpdate(nextProps, nextState){
        // return ( (this.state !== nextState) && (this.props !== nextProps) );
    // }

    componentWillReceiveProps(nextProps){
        if(nextProps.establishments !== this.props.establishments){
            let establishments = [...nextProps.establishments];
            this.setState({filteredEstablishments: establishments});
        }
    }


    componentDidMount(){
        this.props.loadHotels();
    }

    handleSortChange = (key) => {
        let newSort = { ...this.state.sort };
        let options = [...this.state.sort.options];

        options.map(option => {
            if(option.key === key){
                option.selected = true;
            }else{
                option.selected = false;
            }
            return option;
        });

        let updatedSort = { ...newSort, options, value: key };
        this.setState({ sort : updatedSort });
        // this.setFilteredEstablishments({type: 'sort', value: updatedSort.value});
    }

    setSortedEstablishments = (config) => {

        let filteredEstablishments = [ ...this.state.filteredEstablishments ];
        switch (config.type) {
            case 'sort':
                let option = this.state.sort.options.find( o => o.key === config.value );
                let order = option.order;        
                filteredEstablishments.sort((a,b) => { 
                    return (order === "ASC")? a[config.value] - b[config.value] : b[config.value] - a[config.value];
                });    
                this.setState({ filteredEstablishments });
                console.log(filteredEstablishments);
                
                break;

            case 'afterFilter':
            
                let newFilteredEstablishments = filteredEstablishments.filter( hotel => {
                    return hotel.Name.indexOf(config.filteredText) >= 0;
                } );

                // console.log(newFilteredEstablishments);
                this.setState({ filteredEstablishments: newFilteredEstablishments });
                break;
        
            default:
                break;
        }

        

        
    }

    setFilteredEstablishments = (config) => {
        let establishments = [...this.props.establishments];
        let filteredEstablishments = [];

        switch (config.type) {
            case "Name":
                filteredEstablishments = establishments.filter( hotel => {
                    return hotel.Name.toLowerCase().indexOf(config.filteredText.toLowerCase()) >= 0;
                } );

                // console.log('results before', filteredEstablishments.length, filteredEstablishments);
                let filters = [...this.state.filters];
                let otherFilters = filters.filter(f => f.type !== 'Name' && f.value);

                if(otherFilters){
                    var filtered = [];
                    let filteredEstablishments2 = [...filteredEstablishments];

                    otherFilters.map(otherFilter => {
                        filtered = filteredEstablishments2.filter( hotel => {
                            // console.log(otherFilter.type);
                            if( otherFilter.type === 'Stars' ){
                                if(hotel.Stars === otherFilter.value)
                                    console.log(otherFilter.value);
                                return hotel.Stars === otherFilter.value;
                            }else{
                                return hotel[otherFilter.type] >= otherFilter.value[0] && hotel[otherFilter.type] <= otherFilter.value[1];
                            }
                        });
                        return otherFilter;
                    });
                    // console.log('results after', filtered.length, filtered);
                    this.setState({ filteredEstablishments: filtered });
                }else{
                    this.setState({ filteredEstablishments });
                }
                
                // this.setSortedEstablishments({ type: 'afterFilter', value: filteredEstablishments });
                break;
        
            default:
                break;
        }

        
    }

    filterAddedHandler = (filterType, key, value) => {
        let newFilters = [...this.state.filters];
        let newFilter = newFilters.find( f => f.type === filterType);
        let newOptions = [...newFilter.options];
        let option = newOptions.find( o => o.key === key );
        option.value = value;
        this.setState({ filters: newFilters });
    }
    
    onNameChanged = (value) => {
        let filters = [...this.state.filters];
        let nameFilter = filters.find( f => f.type === "Name" );
        nameFilter.value = value;
        this.setState({filters: filters});
        this.setFilteredEstablishments({type: 'Name', filteredText: value});
    }

    render() {

        return (
            <div className={[Classes.HotelSearch, 'grid'].join(' ')}>
                <div className="col-3"> 
                    <Filters 
                    filters={this.state.filters} 
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