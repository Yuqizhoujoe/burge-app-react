import React, { Component } from 'react';
import Wrapper from "../../../hoc/Wrapper";
import Burger from "../../../component/Burger/Burger";
import BurgerControllers from "../../../component/BurgerControllers/BurgerControllers";

import {connect} from "react-redux";
import OrderSummary from "../../../component/OrderSummary/OrderSummary";
import {addIngredient, initIngredients, removeIngredient} from "../../../store/action/burgerBuilder";
import {Spin} from "antd";
import {purchaseInit} from "../../../store/action/order";


class BurgerBuilder extends Component {

    state = {
        purchasing: false
    }

    componentDidMount() {
        this.props.onInitIngredients();
    }

    updateItemPurchasable = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            })
            .reduce((sum, curr) => {
                return sum += curr;
            }, 0);
        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }

    purchaseCancelledHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spin />;

        if (this.props.ingredients) {
            burger =
                (
                    <Wrapper>
                        <Burger
                            ingredients={this.props.ingredients}
                        />
                        <BurgerControllers
                            ingredientAdded={(ingredientName) => this.props.onAddIngredient(ingredientName)}
                            ingredientRemoved={(ingredientName) => this.props.onRemoveIngredient(ingredientName)}
                            price={this.props.totalPrice}
                            ordered={this.purchaseHandler}
                            isDisable={disabledInfo}
                            purchasable={this.updateItemPurchasable(this.props.ingredients)}
                        />
                    </Wrapper>
                );
        }
        if (this.state.purchasing) {
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ingredients}
                    price={this.props.totalPrice}
                    purchaseCancelled={this.purchaseCancelledHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    show={this.state.purchasing}
                />
            );
        }

        return (
            <Wrapper>
                {orderSummary}
                {burger}
            </Wrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        error: state.burger.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddIngredient: (ingredientName) => dispatch(addIngredient(ingredientName)),
        onRemoveIngredient: (ingredientName) => dispatch(removeIngredient(ingredientName)),
        onInitIngredients: () => dispatch(initIngredients()),
        onInitPurchase: () => dispatch(purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);