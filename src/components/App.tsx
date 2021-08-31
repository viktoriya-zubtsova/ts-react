import * as React from 'react'
import Item from './Item'

interface StandartItem {
  text: string;
  isChecked: boolean;
  id: string;
}

let item: StandartItem = {
  text: 'дело',
  isChecked: false,
  id: '1'
}

function App() {
  return (
    <div className="App">
      <Item
        text={item.text}
        isChecked={item.isChecked}
        id={item.id}
      />
    </div>
  )
}

export default App
