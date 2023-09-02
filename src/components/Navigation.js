import React, { useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';





const  Navigation = (props) => {


  return (
    <div>
      <ul className={props.menuState ? 'menuNav' : 'nav'}>
        {!props.menuState && 
          <li><span><MdShoppingBasket className={`shop-cart-button ${props.cartOpen && 'active'}`} onClick={props.toggleCartOpen}/></span></li>
        }
        <li>Home</li>
        <li>Categories</li>
        <li>Rewievs</li>
        <li>Our app</li>
      </ul>
    </div>
  );
};

export default Navigation;