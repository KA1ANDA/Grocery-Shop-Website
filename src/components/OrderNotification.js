import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'




const OrderNotification = (props) => {

  return (
    <div className='notification'>
      <div className='checkMark'><AiFillCheckCircle/></div>
      <div className='notificationTitle'>{props.wishedItem} was added to cart</div>
    </div>
  );
};

export default OrderNotification;