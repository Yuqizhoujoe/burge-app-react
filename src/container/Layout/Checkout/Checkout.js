import React, { Component } from 'react';
import CheckoutSummary from "../../../component/CheckOutSummary/CheckoutSummary";
import Wrapper from "../../../hoc/Wrapper";
import {connect} from "react-redux";
import {Redirect, Route} from "react-router-dom";
import ContactDataForm from "./ContactData/ContactDataForm";
import {purchaseInit} from "../../../store/action/order";


class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />;
        let purchaseRedirect = this.props.purchased ? <Redirect to="/" /> : null;
        if (this.props.ingredients) {
            summary = (
                <Wrapper>
                    {purchaseRedirect}
                    <CheckoutSummary
                        ingredients={this.props.ingredients}
                        checkoutCancelled={this.checkoutCancelledHandler}
                        checkoutContinued={this.checkoutContinueHandler}
                    />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactDataForm}
                    />
                </Wrapper>
            );
        };
        return (
            <Wrapper>
                {purchaseRedirect}
                {summary}
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        purchased: state.order.purchased
    }
}

export default connect(mapStateToProps)(Checkout);