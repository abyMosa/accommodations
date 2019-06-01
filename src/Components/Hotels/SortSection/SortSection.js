import React from 'react';
import Classes from './SortSection.module.css';
import IpSelect from '../../UI/IpSelect/IpSelect';
import Typography from '@material-ui/core/Typography';

const SortSection = (props) => {

    return (
        <div className={Classes.SortSection}>
            <div> { props.propertyCount ? <Typography variant="h5" gutterBottom>{props.propertyCount} properties found</Typography>: null }</div>
            {/* <Typography variant="h4" gutterBottom></Typography> */}
            {/* <div>{ props.propertyCount ? <p>{props.propertyCount} properties found</p>: null }</div> */}
            <div> 
                <IpSelect label="Sort by" options={props.sort.options} onChange={value => props.handleChange(value)} /> 
            </div>
        </div>
    );
};

export default React.memo(SortSection);