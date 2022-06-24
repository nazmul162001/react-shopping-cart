import React from 'react';
import './Cart.css';

const Cart = ({item, handleAddToCart}) => {
  const {id, title, author, price, img} = item;
  return (
    <section className='w-full flex justify-center items-center'>
      <div className="carts w-64 p-5 hover:cursor-pointer hover:shadow-2xl">
        <div className="image_box">
          <img className='w-full h-52' src= {img} alt="" />
        </div>
        <div className="details">
          <p className='font-bold'>{title}</p>
          <p className='text-gray-700 text-sm'>{author}</p>
          <p className='font-bold text-gray-700'>{price}</p>
          <button onClick={()=>handleAddToCart(item)} className='px-3 py-1 border-0 font-bold bg-sky-400 outline-none'>Add to Cart</button>
        </div>
      </div>
    </section>
  );
};

export default Cart;