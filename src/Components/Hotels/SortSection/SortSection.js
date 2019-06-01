import React from 'react';
import Classes from './SortSection.module.css';
import IpSelect from '../../UI/IpSelect/IpSelect';


const SortSection = (props) => {

    return (
        <div className={Classes.SortSection}>
            {/* <div> { props.propertyCount ? <Typography variant="h6" gutterBottom>{props.propertyCount} Properties found</Typography>: null }</div> */}
            {/* <Typography variant="h4" gutterBottom></Typography> */}
            <div className="bold">{ props.propertyCount ? props.propertyCount + " Properties found": null }</div>
            <div> 
                <IpSelect label="Sort by" options={props.sort.options} onChange={value => props.handleChange(value)} /> 
            </div>
        </div>
    );
};

export default React.memo(SortSection);