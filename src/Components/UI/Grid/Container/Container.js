import React from 'react';
import cn from 'classnames';

const Container = ({ fluid, className, ...props }) => {
    return (
        <div 
        className={cn(
            "container",
            fluid && "container--fluid",
            className
        )}
        {...props}
        ></div>
    );
};

export default React.memo(Container);