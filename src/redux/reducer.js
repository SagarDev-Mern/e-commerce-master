import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from './constant'

const cartReducer = (initialState=[], action)=>{

    switch(action.type){
        case ADD_TO_CART :
        console.log("ADD_TO_CART", action.data)
        return [...initialState ,action.data]

        case REMOVE_FROM_CART:
            console.log("REMOVE_FROM_CART", action.data);
            return initialState.slice(0, -1);

        case EMPTY_CART :
         console.log("EMPTY_CART", action.data)
        return []

        default:
        return initialState
    }
}

export default cartReducer