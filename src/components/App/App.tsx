import React, { useState } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

function App(): JSX.Element {
  const [isAllChecked, setIsAllChecked] = useState(false);

  return (
    <div className="wrap">
      <h1 className="title">todos</h1>
      <InputItem
        isAllChecked={isAllChecked}
        setIsAllChecked={setIsAllChecked}
      />
      <ItemList
        setIsAllChecked={setIsAllChecked}
      />
      <Footer
        isAllChecked={isAllChecked}
      />
    </div>
  );
}

export default App;
