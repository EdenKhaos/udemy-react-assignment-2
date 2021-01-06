import React from 'react';

// Create a new component (=> ValidationComponent) which receives the text length as a prop
// Inside the ValidationComponent, either output "Text too short" or "Text long enough" 
// depending on the text length (e.g. take 5 as a minimum length)

const validationComponent = (props) => {
    if (props.text.length >= 5) {
        return (
            <div>
                <p>Text long enough</p>
            </div>
        )
    }
    return (
        <div>
            <p>Text too short</p>
        </div>
    );
};

export default validationComponent;