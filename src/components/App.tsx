import React, { useState } from 'react';
import InputItem from './InputItem';
import ItemList from './ItemList';
import Footer from './Footer';

export interface StandartItem {
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

function App(): JSX.Element {
  const [items, setItems] = useState<StandartItem[]>([item1, item2, item3]);
  const amount: number = (items.filter((item: StandartItem) => !item.isChecked)).length;

  return (
    <div className="wrap">
      <InputItem />
      <ItemList
        items={items}
      />
      <Footer
        amount={amount}
      />
    </div>
  );
}

export default App;
