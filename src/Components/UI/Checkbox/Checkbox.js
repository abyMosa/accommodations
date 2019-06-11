import React from 'react';
import cn from "classnames";

const Checkbox = ( { block, className, ...props } ) => {
    return (
        <label className={ block && "ab-checkbox-block" }>

            <input 
            type="checkbox" 
            className={cn(
                "ab-checkbox",
                className
            )}  
            {...props}
            />
            <div className="label-holder">
                {props.label}
            </div>
        </label>
    );
};

export default Checkbox;