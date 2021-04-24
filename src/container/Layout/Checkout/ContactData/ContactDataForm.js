import React, {Component} from 'react';
import Wrapper from "../../../../hoc/Wrapper";
import ContactData from "../../../../component/ContactData/ContactData";
import {purchaseBurger} from "../../../../store/action/order";
import {connect} from "react-redux";
import {Space, Spin} from "antd";

import classes from './ContactDataForm.module.css';

class ContactDataForm extends Component {

    purchaseOrderHandler = (orderData) => {
        let order = {};
        for (let key in orderData) {
            order[key] = orderData[key]
        }
        let data = {
            ingredients: this.props.ingredients,
            totalPrice: this.props.totalPrice,
            order: order,
        };
        this.props.onPurchaseOrder(data);
    }

    render() {
        let contactData = null;
        if (!this.props.loading) {
            contactData = (
                <ContactData
                    ingredients={this.props.ingredients}
                    price={this.props.totalPrice}
                    purchaseOrder={(orderData) => this.purchaseOrderHandler(orderData)}
                />
            );
        } else {
            contactData = (
                <div className={classes.Spinner}>
                    <Space>
                        <Spin />
                    </Space>
                </div>
            );
        }
        return (
            <Wrapper>
                {contactData}
            </Wrapper>
        );
    }
};

const mapStateToProps = state => {
    return {
        ingredients: state.burger.ingredients,
        totalPrice: state.burger.totalPrice,
        loading: state.order.loading
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPurchaseOrder: (orderData) => dispatch(purchaseBurger(orderData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDataForm);