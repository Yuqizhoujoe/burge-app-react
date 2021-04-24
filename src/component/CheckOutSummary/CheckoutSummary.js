import React, { Component } from 'react';

import Burger from "../Burger/Burger";
import {Button} from "antd";

import classes from './CheckoutSummary.module.css';

const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', amigin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                className={classes.Button}
                type="primary"
                onClick={props.checkoutCancelled}
                danger
            >
                Cancel
            </Button>
            <Button
                className={classes.Button}
                type="primary"
                onClick={props.checkoutContinued}
            >
                Continue
            </Button>
        </div>
    )
}

export default CheckoutSummary;