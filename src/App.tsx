import React, {useState} from 'react';
import {IIngredient} from "./types";
import meatImage from './assets/meatImg.png';
import baconImage from './assets/baconImg.png';
import cheeseImage from './assets/cheeseImg.png';
import saladImage from './assets/saladImg.png';
import './App.css';
import Ingredient from "./Ingredient/Ingredient";


const INGREDIENTS: IIngredient[] = [
    {name: 'Meat', price: 80, img: meatImage},
    {name: 'Cheese', price: 50, img: cheeseImage},
    {name: 'Salad', price: 10, img: saladImage},
    {name: 'Bacon', price: 60, img: baconImage},
];


function App() {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ]);

    const add = (name: string) => {
        const ingredientsCopy = [...ingredients];
        const index = ingredients.findIndex(ingr => ingr.name === name);
        const ingredientCopy = { ...ingredientsCopy[index] };
        ingredientCopy.count++;
        ingredientsCopy[index] = ingredientCopy;
        setIngredients(ingredientsCopy);
    };

    const deleteIngr = (name: string) => {
        const ingredientsCopy = [...ingredients];
        const index = ingredients.findIndex(ingr => ingr.name === name);
        const ingredientCopy = { ...ingredientsCopy[index] };
        if (ingredientCopy.count > 0) {
            ingredientCopy.count--;
            ingredientsCopy[index] = ingredientCopy;
            setIngredients(ingredientsCopy);
        }
    }



  return (
    <div className="App">
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
}

export default App;
