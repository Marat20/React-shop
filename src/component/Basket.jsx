import React from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export default function Basket(props) {
  const { quantity = 0, handleBasket } = props;
  return (
    <div className='basket' onClick={handleBasket}>
      <ShoppingBasketIcon />
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}
