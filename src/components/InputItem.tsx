import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { checkAllItemsCreator } from '../store/actions';

type Props = {
  checkAll: boolean;
  setCheckAll:  React.Dispatch<React.SetStateAction<boolean>>;
}

function InputItem({ checkAll, setCheckAll }: Props ): JSX.Element {
  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const checkAllItems = (): void => {
    dispatch(checkAllItemsCreator(checkAll));
  };

  return (
    <div className="input">
      <input
        className="input__checkbox"
        type="checkbox"
        checked={checkAll}
        onChange={checkAllItems}
      />
      <label
        className="input__label"
        onClick={() => {
          setCheckAll(!checkAll);
          checkAllItems();
        }}
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
