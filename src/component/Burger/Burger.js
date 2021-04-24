import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from './Burger.module.css';

import { Typography } from 'antd';
const { Title } = Typography;

const Burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients).map(key => {
        // [x,x]
        let ingredientsNumber = new Array(props.ingredients[key]);
        // [BurgerController 0 (bacon 0), BurgerController 1 (bacon 1)]
        let burgerControllerComponents = [...ingredientsNumber].map((value, index) => {
            return <BurgerIngredient key={key + index} type={key} />
        });
        return burgerControllerComponents;
    }).reduce((prev, curr) => {
        return prev.concat(curr);
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <Title type="danger" level={3}>Please start adding ingredients!</Title>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default Burger;