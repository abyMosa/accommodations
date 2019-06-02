import React, { Component } from 'react';
import Classes from './SortSection.module.css';
import IpSelect from '../../UI/IpSelect/IpSelect';

class SortSection extends Component {

    state = {
        sort: {
            value: null,
            options: [ 
                { key: '', label: 'Select an option', order: null, selected: false },
                { key: 'Distance', label: 'Distance', order: 'ASC', selected: false },
                { key: 'Stars', label: 'Star ratings', order: 'DESC', selected: false },
                { key: 'UserRatingCount', label: 'Trip rating', order: 'DESC', selected: false },
                { key: 'UserRating', label: 'User rating', order: 'DESC', selected: false },
                { key: 'MinCost', label: 'Budget', order: 'ASC', selected: false },
            ]
        }
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
        this.setState({ sort : updatedSort });
        
        this.props.onSortChanged(updatedSort);
    }

    render() {
        return (
            <div className={Classes.SortSection}>
                <div className="bold">{ this.props.propertyCount ? this.props.propertyCount + " Properties found": null }</div>
                <div> 
                    <IpSelect label="Sort by" options={this.state.sort.options} onChange={value => this.handleSortChange(value)} /> 
                </div>
            </div>
        );
    }
}

export default SortSection;