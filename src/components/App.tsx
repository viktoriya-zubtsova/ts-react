import React, { useState } from 'react';
import ItemList from './ItemList';
import InputItem from './InputItem';

interface StandartItem {
  text: string;
  isChecked: boolean;
  id: number;
}

const item1: StandartItem = {
  text: 'дело1',
  isChecked: false,
  id: 1,
};

const item2: StandartItem = {
  text: 'дело2',
  isChecked: true,
  id: 2,
};

const item3: StandartItem = {
  text: 'дело3',
  isChecked: false,
  id: 3,
};

function App() {
  const [items, setItems]: any = useState([item1, item2, item3]);

  return (
    <div className="App">
      <InputItem />
      <ItemList
        items={items}
        setItems={setItems}
      />
    </div>
  );
}

export default App;
