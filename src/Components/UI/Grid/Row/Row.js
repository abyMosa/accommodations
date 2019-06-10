import React from 'react';
import cn from 'classnames';

const Row = ({ gutter1, gutter2, gutter3, className, ...props }) => {
    return (
        <div 
        className={cn(
            "layout",
            gutter1 && "gutter-1",
            gutter2 && "gutter-2",
            gutter3 && "gutter-3",
            className
        )}
        {...props}
        ></div>
    );
};

export default React.memo(Row);