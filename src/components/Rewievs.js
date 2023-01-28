import React, { Component } from 'react'
import Rewiev from './Rewiev'

export default class Rewievs extends Component {
  render() {
    return (
      <div className='rewievs-area'>
        <h1>What Our Clients Say</h1>
        <div className='rewievs'>
          {this.props.rewievs.map(el =>
              <Rewiev key={el.id} rewiev={el}/>
          )}
        </div>
        <button onClick={()=>this.props.OpenaddRewievWindow()}>Add Rewiev</button>
      </div>
    )
  }
}
