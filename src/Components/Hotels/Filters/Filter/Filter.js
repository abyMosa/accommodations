import React from 'react';
import Classes from './Filter.module.css';
import TextInput from '../../../UI/TextInput/TextInput';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const Filter = (props) => {
    
    let labelClasses = props.config.type === "Name"? [Classes.Label, Classes.NameLabel] : [Classes.Label];

    let filterType = props.config.type;
    // console.log('filterType', filterType);
    let filterBody = props.config.type === "Name" ? 
            <TextInput config={props.config} label="Name" filterAdded={ value => props.onNameAdded(value) }/> 
            : props.config.options.map( option =>  { 
                return (
                    <React.Fragment key={option.key}>
                        <FormControlLabel key={option.key} control={
                            <Checkbox color="primary" checked={option.value} onChange={ (event) => props.onFilterAdded(filterType, option.key, event.target.checked)} /> 
                        }
                        label={option.label}
                        />
                    </React.Fragment>
                );
            });

    return (
        <div className={Classes.Filter}>
            <p className={labelClasses.join(' ')}>{props.config.label}</p>
            {filterBody}
        </div>
    );
};

export default React.memo(Filter);