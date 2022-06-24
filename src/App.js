import React, {useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product";

function App() {
  const [show, setShow] = useState(true);
  
  
  return (
    <div className="">
      <Navbar setShow={setShow}/>
      {
        show? <Product /> : "cart"
      }
    </div>
  );
}

export default App;
