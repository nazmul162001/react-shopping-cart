import React from 'react';
import './Navbar.css';

const Navbar = ({setShow, size}) => {
  return (
    <nav className='w-full h-16 bg-sky-400 sticky top-0'>
      <div className="nav_box w-4/5 m-auto flex items-center justify-between leading-[60px]">
        <span className="my_shop text-2xl font-bold text-white font-mono cursor-pointer" onClick={()=>setShow(true)}>My Shopping</span>
        <div onClick={()=>setShow(false)} className="cart cursor-pointer">
          <span className='text-4xl text-white'><i class="fas fa-cart-plus"></i></span>
          <span className='px-1 text-white bg-red-600 font-bold rounded-lg relative top-[-15px] right-[5px]'>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;