import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';
// import Spinner from '../../Components/UI/Spinner/Spinner';
import SortingBtns from '../../Components/Hotels/SortingBtns/SortingBtns';
import Hotels from '../../Components/Hotels/Hotels';
import Classes from './HotelSearch.module.css';

class HotelSearch extends Component {

    state = {
        filteredEstablishments: [],
        // filters: [ 'Distance', 'Stars', 'MinCost', 'TrpRating', 'UserRating',],
        sortCriteria: { Name: false, Stars: false, TrpRating: false, UserRating: false, MinCost: false }
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

    render() {
        return (
            <div className={[Classes.HotelSearch, 'grid'].join(' ')}>
                <div className="col-3"> 
                    {/* <Filters /> */}
                </div>
                <div className="col-9"> 
                    <SortingBtns criteria={this.state.sortCriteria} clicked={ this.sortingHandler }/> 
                    <Hotels establishments={this.props.establishments} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        establishments: state.establishments.establishments,
        loading: state.establishments.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadHotels : () => dispatch(action.establishmentsInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelSearch);