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
                        return <Filter 
                                key={filter.type} 
                                config={filter} 
                                onNameAdded={(value) => props.onNameAdded(value)} 
                                onFilterAdded={(filterType, key, value) => props.filterAdded(filterType, key, value)} 
                                
                                />
                    })
                }
            </div>
        </div>
    );
};

export default React.memo(Filters);