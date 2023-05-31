import React from 'react';
import Ingredient from "./Ingredient";
import {IIngredients} from "../../types";

interface IProps {
    ingredients: IIngredients[];
    add: (name: string) => void;
    deleteIngr: (name: string) => void;
}

const Ingredients: React.FC<IProps> = ({ingredients, add, deleteIngr}) => {
    return (
        <div>
            {ingredients.map((item, index) => (
                <Ingredient  key={index}
                             name={item.name}
                             index={index}
                             onAddIngr={() => add(item.name)}
                             onDelIngr={() => deleteIngr(item.name)}
                             count={item.count}
                />
            ))}
        </div>
    );
};

export default Ingredients;