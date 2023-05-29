import React, {useState} from 'react';
import {IIngredient} from "./types";
import meatImage from './assets/meatImg.png';
import baconImage from './assets/baconImg.png';
import cheeseImage from './assets/cheeseImg.png';
import saladImage from './assets/saladImg.png';
import './App.css';
import Ingredient from "./Ingredient/Ingredient";


const INGREDIENTS: IIngredient[] = [
    {name: 'Meat', price: 80, img: meatImage, id: 1},
    {name: 'Cheese', price: 50, img: cheeseImage, id: 2},
    {name: 'Salad', price: 10, img: saladImage, id: 3},
    {name: 'Bacon', price: 60, img: baconImage, id: 4},
];

function App() {

    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Bacon', count: 0}
    ]);

  return (
    <div className="App">
      <div>
          {INGREDIENTS.map(item => {
              return <Ingredient
                  key={item.id}
                  image={item.img}
                  name={item.name}
              />
          })}
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
