import React from 'react';

import classes from './BurgerController.module.css';

import { Button } from 'antd';

const BurgerController = (props) => {
    return (
        <div className={classes.BurgerController}>
            <div className={classes.Label}>{props.label}</div>
            <Button
                type="primary"
                danger
                disabled={props.disable}
                onClick={props.remove}
            >
                Less
            </Button>
            <Button
                type="primary"
                onClick={props.add}
            >
                More
            </Button>
        </div>
    );
}

export default BurgerController;