import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { StandartItem } from '../types/types';
import { checkAllItemsCreator, deleteAllItemsCreator } from '../store/actions';

type Props = {
  checkAll: boolean;
}

function Footer({ checkAll }: Props): JSX.Element {
  const items = useSelector<RootState, StandartItem[]>( state => state.items.items);
  const amount = items.filter(item => !item.isChecked).length;

  const dispatch = useDispatch();
  const deleteAllItems = (): void => {
    dispatch(deleteAllItemsCreator());
  };


  return (
    <div className="footer">
      <span className="footer__amount">{amount} items left</span>
      <button className="footer__btn">All</button>
      <button className="footer__btn">Active</button>
      <button className="footer__btn">Completed</button>
      { checkAll
        ? <button
          className="footer__btn_last"
          onClick={deleteAllItems}
        >Clear completed</button>
        : <button
          className="hidden"
        >Clear completed</button>
      }
    </div>
  );
}

export default Footer;
