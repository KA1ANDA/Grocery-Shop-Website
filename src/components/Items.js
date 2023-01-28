import React, { Component } from 'react'
import Item from './Item'

export default class Items extends Component {
  render() {
    return (
      <main>
        {this.props.items.map(el =>
           <Item item={el} key={el.id} addOrder={this.props.addOrder} addQuantity={this.props.addQuantity} removeQuantity={this.props.removeQuantity}/> )}
      </main>
    )
  }
}
