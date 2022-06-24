import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import SingleCart from './components/SingleCart/SingleCart';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <div className="">
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <Product handleAddToCart={handleAddToCart} />
      ) : (
        <SingleCart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
