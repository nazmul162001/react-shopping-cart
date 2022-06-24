import React from 'react';
import list from '../../data';
import Cart from '../Cart/Cart';

const Product = () => {
  return (
    <div className='w-4/5 m-auto mt-[5%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 grid-rows-auto'>
      {list.map((item) => (
        <Cart key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Product;
