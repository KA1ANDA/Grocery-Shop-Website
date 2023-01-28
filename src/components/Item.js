import React, { Component } from 'react'
import { RiShoppingBasketLine } from 'react-icons/ri';

export default class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/"+this.props.item.img}/>
        <h2>{this.props.item.title}</h2>
        <p>Product Weight: {this.props.item.weight}</p>
        <b>${this.props.item.price}</b>
        <div className='add-more-less'>
          <div className='less' onClick={()=>this.props.removeQuantity(this.props.item)}>-</div>
          <h3>{this.props.item.quantity}</h3>
          <div className='more' onClick={()=>this.props.addQuantity(this.props.item)}>+</div>
          <div className='add-to-cart' onClick={()=>this.props.addOrder(this.props.item)} ><RiShoppingBasketLine className='icon' /></div>
        </div>

      </div>
    )
  }
}
