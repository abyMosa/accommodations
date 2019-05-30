import React from 'react';
import Button from '../../UI/Button/Button';
import Classes from './SortingBtns.module.css';

const SortingBtns = (props) => {
    let criteriaAr = Object.keys(props.criteria).map( key => {
        let btnClasses = props.criteria[key]? [Classes.ActiveBtn, Classes.SortingBtn].join(' '): Classes.SortingBtn;
        return(
            <Button classes={btnClasses} value={key} key={key} clicked={props.clicked}>{key}</Button>
        )
    });
    return (
        <div className={Classes.SortingBtnsWrap}>
            { props.propertyCount ? <p>{props.propertyCount} properties found</p>: null }
            <div className={Classes.SortingBtns}>
                {criteriaAr}
            </div>
        </div>
        
    );
};

export default SortingBtns;