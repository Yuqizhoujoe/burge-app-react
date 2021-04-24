import {
    FETCH_INGREDIENTS_FAILED,
    PURCHASE_BURGER_FAILED,
    PURCHASE_BURGER_START,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_INIT,
    SET_ORDERS
} from "./actions";
import axios from '../../axios-orders';

export const purchaseBurgerSuccess = (orderData, id) => {
    return {
        type: PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFailed = (error) => {
    return {
        type: PURCHASE_BURGER_FAILED,
        error: error
    }
};

export const purchaseBurgerStart = () => {
    return {
        type: PURCHASE_BURGER_START
    }
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response);
                dispatch(purchaseBurgerSuccess(orderData, response.data.name));
            })
            .catch(error => {
                dispatch(purchaseBurgerFailed(error));
            });
    }
};

export const purchaseInit = () => {
    return {
        type: PURCHASE_INIT
    }
};

export const setOrders = (orders) => {
    return {
        type: SET_ORDERS,
        orders: orders
    }
};

export const fetchOrdersFailed = (error) => {
    return {
        type: FETCH_INGREDIENTS_FAILED,
        error: error
    }
};

export const initOrders = () => {
    return dispatch => {
        axios.get('/orders.json')
            .then(response => {
                console.log(response);
                dispatch(setOrders(response.data));
            })
            .catch(error => {
                dispatch(fetchOrdersFailed(error));
            });
    }
}
