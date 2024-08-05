import './App.css';
import { useDispatch } from 'react-redux';
import { addToCart } from './redux/action'

function App() {
  const product = {
    name:"i phone",
    price: 50000,
    color: 'red',
    type:'mobile'
  }
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(addToCart(product))} >Add To Cart</button>
    </div>
  );
}

export default App;
