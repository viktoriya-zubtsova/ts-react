import React, { useState } from 'react';


function InputItem() {
  const [value, setValue]: any = useState('');
  const [checkAll, setCheckAll]: any = useState(false);

  return (
    <div className="input">
      <input
        className="input__checkbox"
        type="checkbox"
        checked={checkAll}
      />
      <label
        className="input__label"
        onClick={() => setCheckAll(!checkAll)}
      />
      <input
        className="input__field"
        type="text"
        placeholder="What needs to be done?"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
    </div>
  );
}

export default InputItem;
