import React, {useState} from 'react';
import { INGREDIENTS } from "./Ingredient/Ingredient"
import Ingredient from "./Ingredient/Ingredient";
import Total from "./Total/Total";
import './App.css';


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
    };


    const total = ingredients.reduce((acc, value) => {

        let ingredient = INGREDIENTS.filter(ingredient => ingredient.name === value.name)[0];

        if (ingredient) {
            return acc + (ingredient.price * value.count);
        }

        return acc;

    }, 30);

    // console.log(total);

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
        <Total price={total} />
       </div>
  );
}

export default App;
