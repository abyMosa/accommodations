import React, { PureComponent } from 'react';
import Classes from './Filter.module.css';
import TextInput from '../../../UI/TextInput/TextInput';
import { FormControlLabel } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

class Filter extends PureComponent {

    render() {
        let labelClasses = this.props.config.type === "Name"? [Classes.Label, Classes.NameLabel, 'filter-label'] : [Classes.Label, 'filter-label'];

        let filterType = this.props.config.type;
        let filterBody = this.props.config.type === "Name" ? 
                <TextInput config={this.props.config} label={this.props.config.label} filterAdded={ value => this.props.onNameAdded(value) }/> 
                : this.props.config.options.map( option =>  { 
                    return (
                        <React.Fragment key={option.key}>
                            <FormControlLabel key={option.key} control={
                                <Checkbox color="primary" onChange={ (event) => this.props.onFilterAdded(filterType, option.key, event.target.checked)} /> 
                            }
                            label={option.label}
                            />
                        </React.Fragment>
                    );
                });

        return (
            <div className={[Classes.Filter, "filter"].join(' ')}>
                <p className={labelClasses.join(' ')}>{this.props.config.label}</p>
                {filterBody}
            </div>
        );
    }
}

export default Filter;