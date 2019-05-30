import React from 'react';
import Classes from './Button.module.css';

const Button = (props) => {
    let btnClasses = [props.classes, Classes.Button].join(' ');
    return (
        <React.Fragment>
            <button className={btnClasses} value={props.value} onClick={props.clicked}>{props.children}</button>
        </React.Fragment>
    );
};

export default Button;