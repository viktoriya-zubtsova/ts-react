import React from 'react';

interface Props {
  amount: number;
}

function Footer({ amount }: Props): JSX.Element {

  return (
    <div className="footer">
      <span className="footer__amount">{amount} items left</span>
      <button className="footer__btn">All</button>
      <button className="footer__btn">Active</button>
      <button className="footer__btn">Completed</button>
      <button className="footer__btn_last">Clear completed</button>
    </div>
  );
}

export default Footer;
