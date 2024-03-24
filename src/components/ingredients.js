import React from 'react';
import uuid from 'react-uuid';
import './ingredients.css';

const ingredients = ({ ingrediants }) => {
    return (
        
        <div className="ingredients">
            <strong>Ingredients :- </strong>
            <ul>
                {ingrediants.map(ingrediant => (
                    <li key={uuid()}>{ingrediant.text}</li>
                ))}
            </ul>
        </div>

    )
}

export default ingredients
