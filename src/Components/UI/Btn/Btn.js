import React from 'react';
// import Classes from './Btn.module.css';
import cn from 'classnames';

const Btn = ( { primary, error, info, warning, dark, success, indigo, flat, depressed, outline, block, lg, sm, xs, className, ...props} ) => {
    const Tag = props.href ? "a": "button";
    return (
            <Tag 
            type="button"
            className={cn(
                "ab-btn",
                primary && "primary",
                error && "error",
                info && "info",
                warning && "warning",
                dark && "dark",
                success && "success",
                indigo && "indigo",
                block && "ab-btn--block",
                outline && "ab-btn--outline",
                indigo && "indigo",
                flat && "ab-btn--flat",
                depressed && "ab-btn--depressed",
                lg && "ab-btn--large",
                sm && "ab-btn--small",
                xs && "ab-btn--xs",
                className
            )}

            onClick={props.onClick}
            {...props} />
    );
};

export default React.memo(Btn);