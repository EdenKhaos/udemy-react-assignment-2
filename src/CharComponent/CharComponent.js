import React from 'react';

import './CharComponent.css';

// Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
// Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.
// When you click a CharComponent, it should be removed from the entered text.

const charComponent = (props) => {
    return (
        <div className="CharComponent" onClick={props.delete}>
            <span>{props.char}</span>
        </div>
    )
}

export default charComponent;

