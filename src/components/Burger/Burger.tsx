import React from 'react';
import './Burger.css';

interface IBurgerProps {
    name: string;
}


const Burger: React.FC<IBurgerProps> = props => {

    return (
        <div className={props.name}></div>
    );
};

export default Burger;