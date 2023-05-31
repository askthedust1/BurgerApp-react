import React, {useState} from 'react';
import { INGREDIENTS } from "./Ingredient/Ingredient"
import Ingredient from "./Ingredient/Ingredient";
import Total from "./Total/Total";
import Burger from "./Burger/Burger";
import './App.css';


const App = () => {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ]);

    const [addItem, setAddItem] = useState(['name']);

    const add = (name: string) => {
        const ingredientsCopy = [...ingredients];
        const index = ingredients.findIndex(ingr => ingr.name === name);
        const ingredientCopy = { ...ingredientsCopy[index] };
        ingredientCopy.count++;
        addItem.push(ingredientCopy.name);
        ingredientsCopy[index] = ingredientCopy;
        setIngredients(ingredientsCopy);
    };

    console.log(addItem);

    const deleteIngr = (name: string) => {

        const ingredientsCopy = [...ingredients];
        const index = ingredients.findIndex(ingr => ingr.name === name);
        const ingredientCopy = { ...ingredientsCopy[index] };

        const addItemCopy = [...addItem];
        const ind = addItem.indexOf(name);

        if (ind > -1) {
            addItemCopy.splice(ind, 1);
            setAddItem(addItemCopy);
        }

        if (ingredientCopy.count > 0) {
            ingredientCopy.count--;
            ingredientsCopy[index] = ingredientCopy;
            setIngredients(ingredientsCopy);
        }
    };

    const getTotalSum = () => {
        return ingredients.reduce((acc, value) => {
            let ingredient = INGREDIENTS.filter(ingredient => ingredient.name === value.name)[0];
            if (ingredient) {
                return acc + (ingredient.price * value.count);
            }
            return acc;
        }, 30);
    };


  return (
    <div className="App">
       <div className="wrap">
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

        <div className="Burger">
            <Total price={getTotalSum()} />
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>
            {addItem.map((item, index) => (
                <Burger  key={index}
                         name={item}
                />
            ))}
            <div className="BreadBottom"></div>

       </div>

    </div>
  );
}

export default App;
