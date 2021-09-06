import React from 'react';
import { useDispatch } from 'react-redux';
import { StandartItem } from '../types/types';
import { checkItemCreator, deleteItemCreator } from '../store/actions';

function Item({ text, isChecked, id }: StandartItem): JSX.Element {
  const dispatch = useDispatch();
  const checkItem = (): void => {
    dispatch(checkItemCreator(id));
  };
  const deleteItem = (): void => {
    dispatch(deleteItemCreator(id));
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
