import React from 'react';
import BurgerController from "./BurgerController/BurgerController";

import classes from './BurgerControllers.module.css';

import { Button } from 'antd';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BurgerControllers = (props) => {
    return (
        <div className={classes.BurgerControllers}>
            <h3>Current Price: <strong>{props.price ? props.price.toFixed(2) : null}</strong></h3>
            {controls.map(control => {
                return (
                    <BurgerController
                        key={control.label}
                        label={control.label}
                        add={() => props.ingredientAdded(control.type)}
                        remove={() => props.ingredientRemoved(control.type)}
                        disable={props.isDisable[control.type]}
                    />
                );
            })}
            <div className={classes.OrderButton}>
                <Button
                    size="large"
                    type="primary"
                    danger
                    onClick={props.ordered}
                    disabled={!props.purchasable}
                >Order Now</Button>
            </div>
        </div>
    );
}

export default BurgerControllers;