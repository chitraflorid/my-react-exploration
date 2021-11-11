import React from 'react';

const ExpandCollapser = ({isExpanded, handleClick}) => {
    const className  = isExpanded ? 'expanded-button': 'collpased-button';
    return (
        <>
            <button onClick={handleClick} className={className}>+</button>
        </>
    )
};

export default ExpandCollapser;
