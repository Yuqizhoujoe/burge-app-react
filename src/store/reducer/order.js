import {
    PURCHASE_BURGER_FAILED,
    PURCHASE_BURGER_START,
    PURCHASE_BURGER_SUCCESS,
    PURCHASE_INIT,
    SET_ORDERS
} from "../action/actions";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case PURCHASE_INIT:
            return {
                ...state,
                purchased: false
            }
        case PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };
        case PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
            };
            return {
                ...state,
                orders: state.orders.concat(newOrder),
                loading: false,
                purchased: true
            }
        case PURCHASE_BURGER_FAILED:
            return {...state, loading: false};
        case SET_ORDERS:
            let fetchOrders = Object.keys(action.orders).map(key => {
                return {
                    id: key,
                    ...action.orders[key]
                }
            });
            return {
                ...state,
                orders: fetchOrders
            }
        default:
            return state;
    }
};

export default orderReducer;