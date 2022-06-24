import React from 'react';
import list from '../../data';
import Cart from '../Cart/Cart';

const Product = () => {
  return (
    <div>
      {list.map((item) => (
        <Cart key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Product;
