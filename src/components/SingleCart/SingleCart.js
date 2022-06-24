import React, { useEffect, useState } from 'react';
import './SingleCart.css';
import { toast } from 'react-toastify';

const SingleCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    toast.success('Item Remove Successfully')
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div>
      <article>
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} alt="" />
              <p>{item.title}</p>
            </div>
            <div>
              <button className='px-1 py-1 text-2xl bg-red-100 rounded-full' onClick={() => handleChange(item, 1)}><i class="fas fa-plus"></i></button>
              <button className='px-2 py-1 text-2xl bg-red-100 rounded-full'>{item.amount}</button>
              <button className='px-1 py-1 text-2xl bg-red-100 rounded-full' onClick={() => handleChange(item, -1)}><i class="fas fa-minus"></i></button>
            </div>
            <div>
              <span>{item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    </div>
  );
};

export default SingleCart;
