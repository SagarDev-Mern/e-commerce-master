import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action'
import { productList } from '../redux/productListAction';

const Main = () => {
    const product = {
        id : 1,
        name:"i phone",
        price: 50000,
        color: 'red',
        type:'mobile'
      }

     const productlist = useSelector(state=>state.productList)
     console.log("product List",productlist)

    const dispatch = useDispatch();
    return (
        <div className="App">
            <button onClick={() => dispatch(addToCart(product))} >Add To Cart</button><br/>
            <button onClick={() => dispatch(removeFromCart(product))} >Remove From Cart</button><br/>
            <button onClick={() => dispatch(emptyCart(product))} >Empty Cart</button><br/>
            <button onClick={() => dispatch(productList())} >Product List</button>
        </div>
    )
}

export default Main
