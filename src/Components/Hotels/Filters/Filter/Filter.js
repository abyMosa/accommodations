import React from 'react';
import Classes from './Filter.module.css';
import TextInput from '../../../UI/TextInput/TextInput';


const Filter = (props) => {
    
    let filterBody;
    switch (props.config.type) {
        case "Name":
            filterBody = (<TextInput config={props.config} label="Name" filterAdded={ (filterType, value) => props.onFilterAdded(filterType, value) }/>);
            break;

        default:
            break;
    }
    

    return (
        <div className={Classes.Filter}>
            <p className={Classes.Label}>{props.config.label}</p>
            {filterBody}

        </div>
    );
};

export default Filter;