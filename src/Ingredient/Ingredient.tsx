import React from 'react';
import {IIngredient} from "../types";
import meatImage from "../assets/meatImg.png";
import cheeseImage from "../assets/cheeseImg.png";
import saladImage from "../assets/saladImg.png";
import baconImage from "../assets/baconImg.png";

interface IIngredientProps {
    onAddIngr: React.MouseEventHandler<Element>;
    index: number;
    name: string;
    onDelIngr: React.MouseEventHandler<Element>;
    count: number;
}

export const INGREDIENTS: IIngredient[] = [
    {name: 'Meat', price: 80, img: meatImage},
    {name: 'Cheese', price: 50, img: cheeseImage},
    {name: 'Salad', price: 10, img: saladImage},
    {name: 'Bacon', price: 60, img: baconImage},
];


const Ingredient: React.FC<IIngredientProps> = props => {

    return (
        <div>
            <img onClick={props.onAddIngr} className="pic" src={INGREDIENTS[props.index].img} alt="pic" />
            <div>{props.name}</div>
            x {props.count}
            <button onClick={props.onDelIngr}>Delete</button>
        </div>
    );
};

export default Ingredient;