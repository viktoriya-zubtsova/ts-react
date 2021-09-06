import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import { StandartItem } from '../types/types';
import { RootState } from '../store';

function ItemList(): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>(state => state.items.items);

  return (
    <ol>
      {items.map((item) => (
        <div key={item.id}>
          <Item
            text={item.text}
            isChecked={item.isChecked}
            id={item.id}
          />
        </div>))}
    </ol>
  );
}

export default ItemList;
