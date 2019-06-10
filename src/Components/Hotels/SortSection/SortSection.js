import React, { Component } from 'react';
import Classes from './SortSection.module.css';
import IpSelect from '../../UI/IpSelect/IpSelect';
import Row from '../../UI/Grid/Row/Row';
import Col from '../../UI/Grid/Col/Col';
import cn from 'classnames';

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
            <Row gutter2 className={cn(Classes.SortSection, "my-4", "f-aa-end", "f-jc-sb")}>
                <Col md6> <div className={[Classes.CountResults, "thin"].join(' ')}>{ this.props.propertyCount ? this.props.propertyCount + " Properties found": null }</div> </Col>
                <Col md6>
                    <IpSelect label="Sort by" options={this.state.sort.options} onChange={value => this.handleSortChange(value)} /> 
                </Col>
            </Row>
        );
    }
}

export default SortSection;