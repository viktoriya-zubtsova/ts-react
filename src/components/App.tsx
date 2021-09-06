import React, { useState } from 'react';
import InputItem from './InputItem';
import ItemList from './ItemList';
import Footer from './Footer';

function App(): JSX.Element {
  const [checkAll, setCheckAll] = useState(false);

  return (
    <div className="wrap">
      <h1 className="title">todos</h1>
      <InputItem
        checkAll={checkAll}
        setCheckAll={setCheckAll}
      />
      <ItemList
      />
      <Footer
        checkAll={checkAll}
      />
    </div>
  );
}

export default App;
