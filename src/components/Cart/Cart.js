import React from 'react';
import Item from '../Item/Item';

const Cart = (props) => {
  const { cart } = props;
  let total = 0;


  for (let course of cart) {
    total = parseInt(total) + parseInt(course.price);
  }
  return (
    <div className="card border-dark mb-3">
      <div className="card-header">Order Summery</div>
      <div className="card-body text-dark">
        <h5 className="card-title">Course Added: {props.cart.length}</h5>
        <h5 className="card-title">Total Price: $ {total}</h5>

        <div>
          {
            cart.map(item => <Item item={item}></Item>)
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;