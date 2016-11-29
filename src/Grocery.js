import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete, id }) => {
  return (
    <article key={id} className={classnames(`Grocery ${starred ? 'starred' : ''} ${purchased ? 'purchased' : ''}`)}>
      <h3>{name}</h3>
      {quantity && <p className='Grocery-quantity'>Quantity: {quantity}</p>}
      {notes && <p className="Grocery-notes">{notes}</p>}
      <button
        className="Grocery-purchase"
        onClick={onPurchase}>
        {purchased ? 'Unpurchase' : 'Purchase'}
      </button>
      <button
        className="Grocery-star"
        onClick={onStar}>
        {starred ? 'Unstar' : 'Star'}
      </button>
      <button
        className="Grocery-remove"
        onClick={onDelete}>
        Remove
      </button>
    </article>
  )
}

export default Grocery;
