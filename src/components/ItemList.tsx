import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';
import { ItemListPropsType, StandartItem } from '../types/types';
import { RootState } from '../store';

function ItemList({ setCheckAll }: ItemListPropsType): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>(state => state.items.filteredItems);

  return (
    <ol>
      {items.map((item) => (
        <div key={item.id}>
          <Item
            text={item.text}
            isChecked={item.isChecked}
            id={item.id}
            setCheckAll={setCheckAll}
          />
        </div>))}
    </ol>
  );
}

export default ItemList;
