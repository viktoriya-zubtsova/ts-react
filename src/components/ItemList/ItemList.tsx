import React from 'react';
import { useSelector } from 'react-redux';
import Item from '../Item/Item';
import { Filters, StandartItem } from '../../types/types';
import { RootState } from '../../store';
import './ItemList.css';

export type ItemListPropsType = {
  setIsAllChecked:  React.Dispatch<React.SetStateAction<boolean>>;
}

function ItemList({ setIsAllChecked }: ItemListPropsType): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>(state => state.items.items);
  const filter = useSelector<RootState, string>(state => state.items.filter);

  const getFilteringPredicate = (item: StandartItem) => {
    switch (filter) {
    case Filters.ALL: {
      return true;
    }
    case Filters.CHECKED: {
      return item.isChecked;
    }
    case Filters.ACTIVE: {
      return !item.isChecked;
    }
    default:
      return true;
    }
  };

  return (
    <ol>
      {items.filter(getFilteringPredicate).map((item) => (
        <div key={item.id}>
          <Item
            text={item.text}
            isChecked={item.isChecked}
            id={item.id}
            setIsAllChecked={setIsAllChecked}
          />
        </div>))}
    </ol>
  );
}

export default ItemList;
