import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function BasketItem(props) {
  const {
    mainId,
    displayName,
    finalPrice,
    quantity,
    deleteItem = Function.prototype,
    decreaseQuantity = Function.prototype,
    increaseQuantity = Function.prototype,
  } = props;

  return (
    <MenuItem>
      <Typography variant='inherit'>
        {displayName}
        <ListItemIcon className='btnQuantity' onClick={() => decreaseQuantity(mainId, quantity)}>
          <RemoveIcon />
        </ListItemIcon>
        x{quantity}
        <ListItemIcon className='btnQuantity' onClick={() => increaseQuantity(mainId)}>
          <AddIcon />
        </ListItemIcon>
        = {finalPrice * quantity} руб.
      </Typography>
      <ListItemIcon className='btnClose' onClick={() => deleteItem(mainId)}>
        <DeleteIcon />
      </ListItemIcon>
      
    </MenuItem>
    
    
  );
}
