import React, { Dispatch, SetStateAction } from 'react';
import { StandartItem } from './App';

interface Props extends StandartItem {
  setItems: Dispatch<SetStateAction<StandartItem[]>>;
}

function Item({ text, isChecked, id, setItems }: Props) {
  return (
    <div
      className="item"
      id={id}
    >
      <input
        className="item__checkbox"
        type="checkbox"
        checked={isChecked}
      />
      <label
        className="item__label"
      >{text}</label>
      <button className="item__dlt">x</button>
    </div>
  );
}

export default Item;
