import React from 'react';
import Classes from './SortSection.module.css';

const SortSection = (props) => {
    
    let criteriaAr = Object.keys(props.criteria).map( key => {
        // let btnClasses = props.criteria[key]? [Classes.ActiveBtn, Classes.SortingBtn].join(' '): Classes.SortingBtn;
        return(
            // <Button classes={btnClasses} value={key} key={key} clicked={props.clicked}>{key}</Button>
            <option value={key} key={key}>{key}</option>
        )
    });
    return (
        <div className={Classes.SortingBtnsWrap}>
            { props.propertyCount ? <p>{props.propertyCount} properties found</p>: null }
            <div className={Classes.SortingBtns}>
                <select >
                    {criteriaAr}
                </select>
                
            </div>
        </div>
    );
};

export default React.memo(SortSection);