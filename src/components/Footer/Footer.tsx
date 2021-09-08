import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { StandartItem, Filters } from '../../types/types';
import { deleteAllItemsCreator, filterCreator } from '../../store/actions';
import './Footer.css';

function Footer(): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>(state => state.items.items);
  const filter = useSelector<RootState, string>(state => state.items.filter);
  const amount = items.filter(item => !item.isChecked).length;
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (items.filter(item => item.isChecked).length > 0) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [items]);

  const dispatch = useDispatch();
  const deleteAllItems = (): void => {
    dispatch(deleteAllItemsCreator());
  };
  const filterItems = (filter: string): void => {
    dispatch(filterCreator(filter));
  };

  return (
    <div className={ items.length > 0 ? 'footer' : 'none' }>
      <span className="footer__amount">{amount} items left</span>
      <button
        className={ filter === Filters.ALL ? 'footer__btn active' : 'footer__btn' }
        onClick={() => {
          filterItems( Filters.ALL );
        }}
      >All</button>
      <button
        className={ filter === Filters.ACTIVE  ? 'footer__btn active' : 'footer__btn' }
        onClick={() => {
          filterItems( Filters.ACTIVE );
        }}
      >Active</button>
      <button
        className={ filter === Filters.CHECKED ? 'footer__btn active' : 'footer__btn' }
        onClick={() => {
          filterItems( Filters.CHECKED );
        }}
      >Completed</button>
      <button
        className={ isChecked ? 'footer__btn_last' : 'hidden' }
        onClick={() => {
          deleteAllItems();
        }}
      >Clear completed</button>
    </div>
  );
}

export default Footer;
