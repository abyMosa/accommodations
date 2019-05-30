import React from 'react';
import Filter from './Filter/Filter';
import Classes from './Filters.module.css';

const Filters = (props) => {
    
    return (
        <div className={Classes.Filters}>
            <p className="ma-0 bold">Filter By:</p>
            
            <div className={Classes.FiltersWrap}>
                {
                    props.filters.map(filter => {
                        return <Filter key={filter.type} config={filter} onFilterAdded={(filterType, value) => props.filterAdded(filterType, value)} />
                    })
                }
            </div>
        </div>
        
    );
};

export default Filters;