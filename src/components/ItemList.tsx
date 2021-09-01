import React from 'react';
import Item from './Item';
import { StandartItem } from './App';

interface Props {
  items: StandartItem[];
}

function ItemList({ items }: Props): JSX.Element {
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
