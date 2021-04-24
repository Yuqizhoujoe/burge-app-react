import React, {Component} from 'react';
import {connect} from "react-redux";
import {initOrders} from "../../../store/action/order";
import {Descriptions, Divider} from "antd";
import Order from "../../../component/Order/Order";

class Orders extends Component {

    state = {
        size: 'default'
    }

    componentDidMount() {
        this.props.onInitOrders();
    }

    render() {
        let orders = [];
        if (this.props.orders) {
            for (let order of this.props.orders) {
                orders = orders.concat(
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        order={order.order}
                        totalPrice={order.totalPrice}
                        size={this.state.size}
                    />
                );
            }
        }
        return (
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitOrders: () => dispatch(initOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders);