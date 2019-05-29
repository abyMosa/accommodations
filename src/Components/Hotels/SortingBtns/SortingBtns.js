import React from 'react';

const SortingBtns = (props) => {
    let criteriaAr = Object.keys(props.criteria).map( key => {
        return(
            <button key={key} value={key} onClick={props.clicked}> {key}  ( {props.criteria[key]? 'true': 'false' } )  </button>
        )
    });
    return (
        <div>
            {criteriaAr}
        </div>
    );
};

export default SortingBtns;