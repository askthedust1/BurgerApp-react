import React from 'react';
import {IIngredient} from "../../types";
import meatImage from "../../assets/meatImg.svg";
import cheeseImage from "../../assets/cheeseImg.svg";
import saladImage from "../../assets/saladImg.svg";
import baconImage from "../../assets/baconImg.svg";

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
        <div className="wrap-inner">
            <img onClick={props.onAddIngr} className="pic" src={INGREDIENTS[props.index].img} alt="pic" />
            <h2>{props.name} x {props.count}</h2>
            <button onClick={props.onDelIngr}>X</button>
        </div>
    );
};

export default Ingredient;