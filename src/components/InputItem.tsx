import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItemCreator, checkAllItemsCreator } from '../store/actions';

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
  const addNewItem = (): void => {
    dispatch(addNewItemCreator(value));
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
      <form onSubmit={addNewItem}>
        <input
          className="input__field"
          type="text"
          placeholder="What needs to be done?"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <input
          type="submit"
          className="input__submit"
        />
      </form>
    </div>
  );
}

export default InputItem;
