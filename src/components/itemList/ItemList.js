import React from 'react';
import 'firebase/compat/firestore';
import { useFirestore } from '../../firebase/useFirebase';
import Item from '../item/Item';
import './itemList.css';

const ItemList = () => {
  const { items } = useFirestore();

  return (
    <div className="item-list">
      {items.map((item) => {
        return <Item item={item} key={item.id} />;
      })}
    </div>
  );
};

export default ItemList;