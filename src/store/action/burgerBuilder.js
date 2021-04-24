import {ADD_INGREDIENT, FETCH_INGREDIENTS_FAILED, REMOVE_INGREDIENT, SET_INGREDIENTS} from "./actions";
import axios from "../../axios-orders";

export const addIngredient = ( ingredientName ) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: ingredientName
    }
};

export const removeIngredient = ( ingredientName ) => {
    return {
        type: REMOVE_INGREDIENT,
        ingredientName: ingredientName
    }
};

export const fetchIngredientsFailed = () => {
    return {
        type: FETCH_INGREDIENTS_FAILED
    }
};

export const setIngredients = ( ingredients ) => {
    return {
        type: SET_INGREDIENTS,
        ingredients: ingredients
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('https://react-my-burger-51559-default-rtdb.firebaseio.com/ingredients.json')
            .then(res => {
                console.log(res);
                dispatch(setIngredients(res.data));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            })
    }
};