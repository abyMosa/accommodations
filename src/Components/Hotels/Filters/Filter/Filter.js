import React from 'react';
import Classes from './Filter.module.css';
import TextInput from '../../../UI/TextInput/TextInput';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const Filter = (props) => {
    
    let filterType = props.config.type;
    console.log('filterType', filterType);
    let filterBody = props.config.type === "Name" ? 
                    <TextInput config={props.config} label="Name" filterAdded={ value => props.onNameAdded(value) }/> 
                    : props.config.options.map( (option, i) =>  { 
                        return (
                            <FormControlLabel key={i} control={
                                <Checkbox key={props.config.type+'-'+i} checked={props.config.value} onChange={ (event) => props.onFilterAdded(filterType, option.key, event.target.checked)} /> 
                            }
                            label={option.label}
                            />
                        );
                    });

    return (
        <div className={Classes.Filter}>
            <p className={Classes.Label}>{props.config.label}</p>
            {filterBody}
        </div>
    );
};

export default Filter;