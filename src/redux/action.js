import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constant'

export const addToCart = (data) => {
    console.log("add to cart action called")
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeFromCart = (data) =>{
    console.log("remove from cart action called")
    return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = (data) =>{
    console.log("empty cart action called")
    return {
        type: EMPTY_CART,
        data
    }
}