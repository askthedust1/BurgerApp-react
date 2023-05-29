import React from 'react';

interface IIngredientProps {
    // onAddIngr: React.MouseEventHandler<Element>;
    // ingrClass: string;
    image: string;
    name: string;
}

const Ingredient: React.FC<IIngredientProps> = props => {

    return (
        <div>
            <img className="pic" src={props.image} alt="pic"/>
            <div>{props.name}</div>
        </div>
    );
};

export default Ingredient;