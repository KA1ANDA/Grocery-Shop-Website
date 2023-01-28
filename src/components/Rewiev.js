import React, { Component } from 'react'

export default class Rewiev extends Component {
  render() {
    return (
      <div className='rewiev'>
        <div className='user-photo'>
          <img src={"./img/userImgs/"+this.props.rewiev.img} />
        </div>
        <h3>{this.props.rewiev.firstName}</h3>
        <h3>{this.props.rewiev.lastName}</h3>
        <p>{this.props.rewiev.comment}</p>
      </div>
    )
  }
}
