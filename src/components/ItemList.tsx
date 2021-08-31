import React, { Dispatch, SetStateAction } from 'react';
import Item from './Item';
import { StandartItem } from './App';

interface Props {
  items: StandartItem[];
  setItems: Dispatch<SetStateAction<StandartItem[]>>;
}

function ItemList({ items, setItems }: Props) {
  return (
    <ol>
      {items.map((item) => (
        <div key={item.id}>
          <Item
            text={item.text}
            isChecked={item.isChecked}
            id={item.id}
            setItems={setItems}
          />
        </div>))}
    </ol>
  );
}

export default ItemList;
