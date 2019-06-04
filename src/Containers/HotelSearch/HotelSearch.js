import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
import Filters from '../../Components/Hotels/Filters/Filters';
import Hotels from '../../Components/Hotels/Hotels';
import Classes from './HotelSearch.module.css';
import SortSection from '../../Components/Hotels/SortSection/SortSection';
import * as utility from '../../store/utility';
import Grid from '@material-ui/core/Grid';

class HotelSearch extends Component {

    state = { filteredEstablishments: [], sortObj: null }

    componentWillReceiveProps(nextProps){
        if(nextProps.establishments !== this.props.establishments){
            let establishments = [...nextProps.establishments];
            this.setState({filteredEstablishments: establishments});
        }
    }

    componentDidMount(){
        this.props.loadHotels();
    }

    // If the sort has been changed the sort component will pass a reference to this funciton to update 
    // the Establishments array
    // Also, after every filter changes this function will be trigered to sort the newly created list
    sortFilteredEstablishments = (sort = null, filteredEstablishments = null) => {
        if(!this.state.sortObj && !sort)
            return;

        sort = sort? sort: this.state.sortObj;

        let selectedOption = sort.options.find(option => option.key === sort.value);
        filteredEstablishments = filteredEstablishments? filteredEstablishments: [ ...this.state.filteredEstablishments ];
        if( !sort.value ){
            filteredEstablishments.sort( (a,b) => a.EstablishmentId - b.EstablishmentId );    
        }else{
            filteredEstablishments.sort( (a,b) => {
                return (selectedOption.order === "ASC")? a[selectedOption.key] - b[selectedOption.key] : b[selectedOption.key] - a[selectedOption.key];
            } );    
        }
        this.setState({ filteredEstablishments, sortObj: sort });
    }   

    // receive filters obj and filters through hotels then sets the Establishments list
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
        this.setState({ filteredEstablishments, filterObj: filters });
        this.sortFilteredEstablishments(null, filteredEstablishments);
    }

    render() {
        return (
            <div className={[Classes.HotelSearch,].join(' ')}>
                
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Filters 
                                filterAdded={(filterType, key, value) => this.filterAddedHandler(filterType, key, value)}
                                onFilterEstablishments={filtersObj => this.setFilteredEstablishments(filtersObj)}
                                />
                        </div>
                        <div className="col-lg-9">
                            <div className="row">
                                <div className="col">
                                    <SortSection sort={this.state.sort}  propertyCount={this.state.filteredEstablishments.length} onSortChanged={sortObj =>  this.sortFilteredEstablishments(sortObj)}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <Hotels establishments={this.state.filteredEstablishments} loading={this.props.loading} />
                                </div>
                            </div>
                        </div>
                    </div>
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