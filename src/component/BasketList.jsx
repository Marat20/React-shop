import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import BasketItem from './BasketItem';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export default function BasketList(props) {
  const {
    order = [],
    handleBasket = Function.prototype,
    deleteItem = Function.prototype,
    decreaseQuantity = Function.prototype,
    increaseQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, current) => {
    return sum + current.finalPrice * current.quantity;
  }, 0);

  return (
    <Paper className='basketList'>
      <MenuList>
        <ListItem className='btnCloseBasket' onClick={handleBasket}>
          <CloseIcon />
        </ListItem>
        <ListItem>
          {order.length ? <span>Корзина</span> : <span>Корзина пустая</span>}
        </ListItem>
        <Divider />
        {order.map((item) => {
          return (
            <div>
              <BasketItem
                key={item.mainId}
                {...item}
                deleteItem={deleteItem}
                decreaseQuantity={decreaseQuantity}
                increaseQuantity={increaseQuantity}
              />
              <Divider />
            </div>
          );
        })}

        <ListItem>
          <Typography variant='inherit'>
            Общая стоимость: {totalPrice} руб.
          </Typography>
        </ListItem>
      </MenuList>
    </Paper>
  );
}
