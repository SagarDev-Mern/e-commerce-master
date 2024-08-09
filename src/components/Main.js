import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeFromCart } from '../redux/action'
import { productList } from '../redux/productListAction';

const Main = () => {

    useEffect(() => {
        dispatch(productList());
      }, [])

    const productlist = useSelector(state => state.productList)
    console.log("product List", productlist)

    const dispatch = useDispatch();
    return (
        <div className="App">
            {/* <button onClick={() => dispatch(addToCart(product))} >Add To Cart</button><br />
            <button onClick={() => dispatch(removeFromCart(product))} >Remove From Cart</button><br /> */}
            <button onClick={() => dispatch(emptyCart())} >Empty Cart</button><br />
            {/* <button onClick={() => dispatch(productList())} >Product List</button> */}

            <div className='products'>
                {
                    productlist.map((item) =>
                        <div className='product-item' key={item.id}>
                            <img style={{height: '200px'}} src={item.photo} alt="" />
                            <div>Name : {item.name}</div>
                            <div>Price : {item.price}</div>
                            <div>Color : {item.color}</div>
                            <div>Type : {item.type}</div>
                            <div>
                            <button onClick={() => dispatch(addToCart(item))} >Add To Cart</button>
                            <button onClick={() => dispatch(removeFromCart(item.id))} >Remove From Cart</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Main
