import React from 'react';
import Classes from './Filter.module.css';
import TextInput from '../../../UI/TextInput/TextInput';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const Filter = (props) => {
    
    let filterType = props.config.type;
    let filterBody;
    // console.log('props', props);

    switch (props.config.type) {

        case "Name":
            filterBody = (<TextInput config={props.config} label="Name" filterAdded={ (filterType, value) => props.onFilterAdded(filterType, value) }/>);
            break;

        case "Stars":
            filterBody = props.config.config.options.map( (filter, i) =>  { 
                console.log('filterType', filterType);
                return (
                    <FormControlLabel key={i} control={
                        <Switch key={props.config.type+'-'+i} checked={props.config.value} onChange={ (filterType, value) => props.onFilterAdded(filterType, value)} /> 
                    }
                    label={filter.label}
                    />
                );
            });
            break;

        default:
            filterBody = props.config.config.options.map( (filter, i) =>  { 
                return (
                    <FormControlLabel key={i} control={
                        <Checkbox key={props.config.type+'-'+i} checked={props.config.value} onChange={ (filterType, value) => props.onFilterAdded(filterType, value)} /> 
                    }
                    label={filter.label}
                    />
                );
            });
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