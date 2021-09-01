import React from 'react';
import { StandartItem } from './App';

type Props = StandartItem

function Item({ text, isChecked, id }: Props): JSX.Element {
  return (
    <div
      className="item"
      id={`${id}`}
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
