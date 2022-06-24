import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='w-full h-16 bg-sky-400'>
      <div className="nav_box w-4/5 m-auto flex items-center justify-between leading-[60px]">
        <span className="my_shop text-2xl font-bold text-white font-mono cursor-pointer">My Shopping</span>
        <div className="cart cursor-pointer">
          <span><i class="fas fa-cart-plus"></i></span>
          <span>0</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;