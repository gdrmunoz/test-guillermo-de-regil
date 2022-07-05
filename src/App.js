import { useState } from 'react';
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import data from './data';

function App() {
  var { contracts } = data;
  const [cartItems, setCartItems] = useState([]);
  // const [isInBasket, setIsInBasket] = useState(false);

  const onAdd = (contract) => {
    const exist = cartItems.find((c) => c.code === contract.code);
    if (exist) {
      setCartItems(
        cartItems.map((c) =>
          c.code === contract.code ? { ...exist, qty: exist.qty + 1 } : c
        )
      );
      contract.qty = exist.qty + 1;
    } else {
      setCartItems([...cartItems, { ...contract, qty: 1 }]);
      contract.qty = 1;
    }

  }

  const onRemove = (contract) => {
    const exist = cartItems.find((c) => c.code === contract.code);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((c) => c.code !== contract.code));
      contract.qty = 0;
    } else {
      setCartItems(
        cartItems.map((c) =>
          c.code === contract.code ? { ...exist, qty: exist.qty - 1 } : c
        )
      );
      contract.qty = exist.qty - 1;
    }
  }


  return (
    <div className='App'>
      <Header></Header>
      <div className='base row'>
        <Main onAdd={onAdd} onRemove={onRemove} contracts={contracts} cartItems={cartItems}></Main>
        <Basket cartItems={cartItems} ></Basket>
      </div>
    </div>
  );
}

export default App;

