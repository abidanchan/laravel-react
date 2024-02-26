// Test.jsx

import React from 'react';

const Test = ({ tests }) => {
    return (
        <div>
            <h1>Tests</h1>
            <ul>
                {tests.map(test => (
                    <li key={test.id}>
                        <p>Name: {test.name}</p>
                        <p>Age: {test.age}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test;
