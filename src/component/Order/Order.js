import React from 'react';
import {Descriptions, Divider} from "antd";
import Wrapper from "../../hoc/Wrapper";

const Order = (props) => {

    let orders = [];
    let title = "";

    let ingredients = Object.keys(props.ingredients).map(ingredientName => {
        return <Descriptions.Item label={ingredientName.toUpperCase()}>{props.ingredients[ingredientName]}</Descriptions.Item>;
    });
    orders = orders.concat(ingredients);
    console.log(ingredients);
    console.log(orders);
    let orderDetails = Object.keys(props.order).map(key => {
        if (key.toUpperCase() === 'NAME') {
            title = props.order[key];
        }
        return <Descriptions.Item label={key.toUpperCase()}>{props.order[key]}</Descriptions.Item>;
    });
    orders = orders.concat(orderDetails);
    console.log(ingredients);
    console.log(orderDetails);
    let totalPrice = <Descriptions.Item label="TOTAL PRICE">{props.totalPrice.toFixed(2)}</Descriptions.Item>
    orders = orders.concat(totalPrice);

    return (
        <Wrapper>
            <Descriptions
                bordered
                title={title}
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                size={props.size}
            >
                {orders}
            </Descriptions>
            <Divider orientation="right" plain>End</Divider>
        </Wrapper>
    );
};

export default Order;