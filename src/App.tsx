import React, {useState} from 'react';
import { INGREDIENTS } from "./components/Ingredient/Ingredient";
import Total from "./components/Total/Total";
import Burger from "./components/Burger/Burger";
import Ingredients from "./components/Ingredient/Ingredients";
import './App.css';
import BreadTop from "./components/Burger/BreadTop";
import BreadBottom from "./components/Burger/BreadBottom";



const App = () => {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ]);

    const [addItem, setAddItem] = useState<string[]>([]);

    const add = (name: string) => {
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

    const deleteIngr = (name: string) => {

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
            <BreadTop />
            {addItem.map((item, index) => (
                <Burger  key={index}
                         name={item}
                />
            ))}
            <BreadBottom />
       </div>

    </div>
  );
}

export default App;
