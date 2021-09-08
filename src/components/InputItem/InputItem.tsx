import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewItemCreator, checkAllItemsCreator } from '../../store/actions';
import './InputItem.css';
import { RootState } from '../../store';
import { StandartItem } from '../../types/types';

function InputItem(): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>(state => state.items.items);
  const [value, setValue] = useState('');
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    if (items.filter(item => !item.isChecked).length === 0) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  }, [items]);

  const dispatch = useDispatch();
  const checkAllItems = (): void => {
    dispatch(checkAllItemsCreator(isAllChecked));
  };
  const addNewItem = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (value !== '') {
      dispatch(addNewItemCreator(value));
      setValue('');
    }
  };

  return (
    <div className="input">
      <input
        className="input__checkbox"
        type="checkbox"
        checked={isAllChecked}
        onChange={checkAllItems}
      />
      <label
        className={items.length > 0 ? 'input__label' : 'hidden'}
        onClick={() => {
          checkAllItems();
          setIsAllChecked(!isAllChecked);
        }}
      />
      <form onSubmit={event => addNewItem(event)}>
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
