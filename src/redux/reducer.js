import {ADD_TO_CART, REMOVE_FROM_CART} from './constant'

const cartReducer = (data=[], action)=>{

    switch(action.type){
        case ADD_TO_CART :
        console.log("ADD_TO_CART", action.data)
        return action.data

        case REMOVE_FROM_CART :
         console.log("REMOVE_FROM_CART", action.data)
        return action.data

        default:
        return initialState
    }
}

export default cartReducer