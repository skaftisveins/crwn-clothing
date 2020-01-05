import React, { Component } from 'react';
import CustomButton from '../custom-button/Custom-button';
import './Cart-dropdown.styles.css';

export class CartDropdown extends Component {
  render() {
    return (
      <div className='cart-dropdown'>
        <div className='cart-items'>
          <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
      </div>
    );
  }
}

export default CartDropdown;
