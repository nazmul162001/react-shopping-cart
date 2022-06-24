import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const handleAddToCart = (item) => {
    setCart([...cart, item])
  }  
  
  
  return (
    <div className="">
      <Navbar setShow={setShow}/>
      {
        show? <Product handleAddToCart={handleAddToCart} /> : "cart"
      }
    </div>
  );
}

export default App;
