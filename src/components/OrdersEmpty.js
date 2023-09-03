import React from 'react'
import {FaBasketShopping} from 'react-icons/fa6';

const OrdersEmpty = () =>{
  return(
    <div className='empty' >
      <h2>You Do Not Have Any Orders</h2>
      <div className='EmptyIcon'>
        <FaBasketShopping />
      </div> 
    </div>
  )
}

export default OrdersEmpty