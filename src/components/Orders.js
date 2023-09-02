import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa';

const Orders = (props) => {

  return (
    <div className='order'>
      <img src={"./img/"+props.order.img}/>
      <h2>{props.order.title}</h2>
      {/* <p>Product Weight: {props.order.weight}</p> */}
      <p>X {props.order.productQuantity}</p>
      <FaTrash className='cancel-order' onClick={() => props.orderCancel(props.order.id)} />
      <b>${props.order.price}</b>
    </div>
  )
}

export default Orders