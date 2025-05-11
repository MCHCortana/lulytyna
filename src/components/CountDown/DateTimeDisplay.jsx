import React from 'react';

export const DateTimeDisplay = ({ value, type, isDanger }) => {
    return (
        <div className={isDanger ? 'countdown danger' : 'countdown'}>
            <p>{value} <span>{type}</span></p>
        </div>
    );
};
