import * as React from 'react'

interface Props {
  text: string;
  isChecked: boolean;
  id: string;
}

function Item({text, isChecked, id}:Props) {

  return (
    <div className="item">
      <input
        className="item__input"
        type="checkbox"
        id={id}
        checked={isChecked}
      />
      <label
        className="item__label"
      >{text}</label>
      <button className="item__dlt">x</button>
    </div>
  )
}

export default Item
