import * as React from 'react';

interface Props {
  text: string;
  isChecked: boolean;
  id: string;
  setItems: any;
}

function Item({ text, isChecked, id }: Props) {

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
