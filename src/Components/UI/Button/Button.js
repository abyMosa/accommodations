import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Classes from './Button.module.css';

const Button = (props) => {
    let btnClasses = [props.classes, Classes.Button].join(' ');
    return (
        <Aux>
            <button className={btnClasses} value={props.value} onClick={props.clicked}>{props.children}</button>
        </Aux>
    );
};

export default Button;