import {ADD_INGREDIENT, FETCH_INGREDIENTS_FAILED, REMOVE_INGREDIENT, SET_INGREDIENTS} from "../action/actions";

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: true
}

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENTS:
            let updatePrice = initialState.totalPrice;
            for (let key in action.ingredients) {
                if (action.ingredients[key] > 0) {
                    updatePrice += INGREDIENT_PRICES[key];
                }
            }
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: updatePrice,
                error: false
            };
        case FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true
            }
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        default:
            return state
    }
}

export default burgerBuilderReducer;