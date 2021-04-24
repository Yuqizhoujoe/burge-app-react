import React from 'react';
import Wrapper from "../../hoc/Wrapper";

import {Modal} from "antd";
import { List, Typography, Divider } from 'antd';


const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(key => {
            let text = key + ": " + props.ingredients[key];
            return text;
        })
        .reduce((prev, curr) => {
            return prev.concat(curr);
        }, []);

    return (
        <Wrapper>
            <Modal
                title="Your Order"
                visible={props.show}
                onOk={props.purchaseContinued}
                onCancel={props.purchaseCancelled}
            >
                <Divider orientation="left">A delicious burger with the following ingredients:</Divider>
                <List
                    bordered
                    dataSource={ingredientSummary}
                    renderItem={item => <List.Item>{item}</List.Item>}
                />
                <Divider />
                <p><strong>Total Price: {props.price ? props.price.toFixed( 2 ) : null}</strong></p>
            </Modal>
        </Wrapper>
    )
}

export default OrderSummary;