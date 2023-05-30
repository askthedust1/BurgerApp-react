import React from 'react';


interface IIngredientProps {
    price: number;
}

const Total: React.FC<IIngredientProps> = props => {

    return (
        <h3>Price: {props.price}</h3>
    );
};

export default Total;