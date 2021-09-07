import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StandartItem } from '../../types/types';
import { checkItemCreator, deleteItemCreator } from '../../store/actions';
import { RootState } from '../../store';
import './Item.css';

export interface ItemPropsType extends StandartItem {
  setIsAllChecked:  React.Dispatch<React.SetStateAction<boolean>>;
}

function Item({ text, isChecked, id, setIsAllChecked }: ItemPropsType): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>(state => state.items.items);

  const getCheckAll = (): void => {
    items.length === items.filter( item => item.isChecked ).length ?
      setIsAllChecked( true )
      :
      setIsAllChecked( false );
  };

  const dispatch = useDispatch();
  const checkItem = (): void => {
    dispatch(checkItemCreator(id));
    getCheckAll();
  };
  const deleteItem = (): void => {
    dispatch(deleteItemCreator(id));
    getCheckAll();
  };

  return (
    <div
      className="item"
      id={id}
    >
      <input
        className="item__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={checkItem}
      />
      <label
        className="item__label"
        onClick={checkItem}
      >{text}</label>
      <button
        className="item__dlt"
        onClick={deleteItem}
      >x</button>
    </div>
  );
}

export default Item;
