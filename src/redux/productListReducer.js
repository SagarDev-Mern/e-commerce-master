import { SET_PRODUCT_LIST } from "./constant";

const productListReducer = (initialState = [], action) => {

    switch (action.type) {
        case SET_PRODUCT_LIST:
            console.log("set product list reducer called.", ...action.data)
            return [...action.data]

        default:
            return initialState
    }
}

export default productListReducer