import * as React from 'react'
import Item from './Item'

interface Props {
  items: [] ;
  setItems: any;
}

function ItemList({ items, setItems }: Props) {

  return (
    <ol>
      {items.map((item: any) => (
        <div key={item.id}>
          <Item
            text={item.text}
            isChecked={item.isChecked}
            id={item.id}
            setItems={setItems}
          />
        </div>))}
    </ol>
  )
}

export default ItemList
