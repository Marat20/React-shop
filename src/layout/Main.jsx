import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../config';
import Goods from '../component/Goods';
import Preloader from '../component/Preloader';
import Basket from '../component/Basket';
import Button from '@material-ui/core/Button';
import BasketList from '../component/BasketList';
import Prompt from '../component/Prompt'

export default function Main() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [promptName, setPromptName] = useState('');


  const handleBasket = () => {
    setBasketShow(!isBasketShow);
  };

  const addOrder = (item) => {
    const itemIndex = order.findIndex(
      (orderIndex) => orderIndex.mainId === item.mainId
    );

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderIndex, index) => {
        if (index === itemIndex) {
          return {
            ...item,
            quantity: orderIndex.quantity + 1,
          };
        } else {
          return orderIndex;
        }
      });
      setOrder(newOrder);
    }
    setPromptName(item.displayName)
  };

  const deleteItem = (item) => {
    const newOrder = order.filter((order) => order.mainId !== item);
    setOrder(newOrder);
  };

  const increaseQuantity = (id) => {
    const newOrder = order.map(item => {
      if (item.mainId === id) {item.quantity++}
      return item
    })
    setOrder(newOrder)
  };

  const decreaseQuantity = (id, quantity) => {
    if (quantity === 1) return deleteItem(id)
    const newOrder = order.map(item => {
      if (item.mainId === id) {item.quantity--}
      return item
    })
    setOrder(newOrder)
  };

  const removePrompt = () => {
    setPromptName('')
  }

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((result) => result.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
      });
  }, []);

  return (
    <div className='container content'>
      <Button>
        <Basket quantity={order.length} handleBasket={handleBasket} />
        {isBasketShow && order ? (
          <BasketList
            order={order}
            handleBasket={handleBasket}
            deleteItem={deleteItem}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}

          />
        ) : null}
      </Button>

      {loading ? <Preloader /> : <Goods goods={goods} addOrder={addOrder} />}

      {
        promptName && <Prompt name={promptName} removePrompt={removePrompt} />
      }
    </div>
  );
}
