import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Product from './components/Product/Product';
import SingleCart from './components/SingleCart/SingleCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  // handle add to cart 
  const handleAddToCart = (item) => {
    if (cart.indexOf(item) !== -1){
      toast.error('Already Added this item')
      return;
    }
    setCart([...cart, item]);
    toast.success('Item Added Successfully')
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
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
