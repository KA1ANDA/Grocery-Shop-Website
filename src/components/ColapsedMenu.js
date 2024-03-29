import React from 'react';
import Navigation from './Navigation';
import OrdersFull from './OrdersFull';
import OrdersEmpty from './OrdersEmpty';
import  {AiOutlineArrowRight} from "react-icons/ai"





const ColapsedMenu = (props) => {


  return (
    <div className='menu'>
      <div className='closeMenu' onClick={props.toggleMenu}><AiOutlineArrowRight/></div>
      <div>
        <Navigation menuState={props.menuState}/>
        {props.showOrders.length > 0 ? <OrdersFull showOrders={props.showOrders} orderCancel={props.orderCancel}/>: <OrdersEmpty/>}
      </div>
    </div>
  );
};

export default ColapsedMenu;