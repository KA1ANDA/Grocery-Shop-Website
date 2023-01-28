import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa';

export default class Orders extends Component {
  render() {
    return (
      <div className='order'>
        <img src={"./img/"+this.props.order.img}/>
        <h2>{this.props.order.title}</h2>
        <p>Product Weight: {this.props.order.weight}</p>
        <FaTrash className='cancel-order' onClick={() => this.props.orderCancel(this.props.order.id)} />
        <b>${this.props.order.price}</b>
      </div>
    )
  }
}
