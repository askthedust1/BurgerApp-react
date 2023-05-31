import React, {useState} from 'react';
import { INGREDIENTS } from "./components/Ingredient/Ingredient";
import Total from "./components/Total/Total";
import Burger from "./components/Burger/Burger";
import './App.css';
import Ingredients from "./components/Ingredient/Ingredients";


const App = () => {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ]);

    const [addItem, setAddItem] = useState<string[]>([]);

    const add = (name: string) => {
        // const ingredientsCopy = [...ingredients];
        // const index = ingredients.findIndex(ingr => ingr.name === name);
        // const ingredientCopy = { ...ingredientsCopy[index] };
        // ingredientCopy.count++;
        // addItem.push(ingredientCopy.name);
        // ingredientsCopy[index] = ingredientCopy;
        // setIngredients(ingredientsCopy);

        setIngredients(prevState => {
            return prevState.map(ingred => {
                if (ingred.name === name) {
                    return {
                        ...ingred,
                        count: ingred.count + 1,
                    };
                }
                return ingred;
            });
        });

        addItem.push(name);

    };

    console.log(addItem);

    const deleteIngr = (name: string) => {

        // const ingredientsCopy = [...ingredients];
        // const index = ingredients.findIndex(ingr => ingr.name === name);
        // const ingredientCopy = { ...ingredientsCopy[index] };



        setIngredients(prevState => {
            return prevState.map(ingred => {
                if (ingred.name === name) {
                    if (ingred.count > 0 ) {
                        return {
                            ...ingred,
                            count: ingred.count - 1,
                        };
                    }
                }
                return ingred;
            });
        });

        const addItemCopy = [...addItem];
        const ind = addItem.indexOf(name);

        if (ind > -1) {
            addItemCopy.splice(ind, 1);
            setAddItem(addItemCopy);
        }


        // if (ingredientCopy.count > 0) {
        //     ingredientCopy.count--;
        //     ingredientsCopy[index] = ingredientCopy;
        //     setIngredients(ingredientsCopy);
        // }
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
           <Ingredients ingredients={ingredients} add={add} deleteIngr={deleteIngr} />
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
