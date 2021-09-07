import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { StandartItem, PropsType } from '../types/types';
import { deleteAllItemsCreator, filterCreator } from '../store/actions';

function Footer({ checkAll, setCheckAll }: PropsType): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>(state => state.items.items);
  const amount = items.filter(item => !item.isChecked).length;
  const [filter, setFilter] = useState('all');

  const dispatch = useDispatch();
  const deleteAllItems = (): void => {
    dispatch(deleteAllItemsCreator());
  };
  const filterItems = (filter: string): void => {
    dispatch(filterCreator(filter));
  };

  useEffect(() => filterItems( filter ));

  return (
    <div className={ items.length > 1 ? 'footer' : 'none' }>
      <span className="footer__amount">{amount} items left</span>
      <button
        className={ filter === 'all' ? 'footer__btn active' : 'footer__btn' }
        onClick={() => {
          setFilter('all' );
          filterItems('all' );
        }}
      >All</button>
      <button
        className={ filter === 'active' ? 'footer__btn active' : 'footer__btn' }
        onClick={() => {
          setFilter('active');
          filterItems('active');
        }}
      >Active</button>
      <button
        className={ filter === 'done' ? 'footer__btn active' : 'footer__btn' }
        onClick={() => {
          setFilter('done');
          filterItems('done');
        }}
      >Completed</button>
      <button
        className={ checkAll ? 'footer__btn_last' : 'hidden' }
        onClick={() => {
          deleteAllItems();
        }}
      >Clear completed</button>
    </div>
  );
}

export default Footer;
