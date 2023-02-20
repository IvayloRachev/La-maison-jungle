import React from 'react';

const CareScale = ({scaleValue, careType}) => {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? <span>☀️</span> : <span>💦</span> 
    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? (<span key={rangeElem.toString()}>{scaleType}</span>) : null)}
        </div>
    );
};

export default CareScale;