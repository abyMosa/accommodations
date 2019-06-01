import Filter from './Filter/Filter';
import Classes from './Filters.module.css';

import React, { Component } from 'react';

class Filters extends Component {
    
    shouldComponentUpdate(nextProps, nextState){
        return ( (this.state !== nextState) && (this.props !== nextProps) );
    }

    render() {
        return (
            <div className={Classes.Filters}>
                <p className="ma-0 heavy">Filter By:</p>
            
                <div className={Classes.FiltersWrap}>
                    {
                        this.props.filters.map( (filter) => {
                            return <Filter 
                                    key={filter.type} 
                                    config={filter} 
                                    onNameAdded={(value) => this.props.onNameAdded(value)} 
                                    onFilterAdded={(filterType, key, value) => this.props.filterAdded(filterType, key, value)} 
                                    
                                    />
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Filters;