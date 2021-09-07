import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

function App(): JSX.Element {

  return (
    <div className="wrap">
      <h1 className="title">todos</h1>
      <InputItem />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
