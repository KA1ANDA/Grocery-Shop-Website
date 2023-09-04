import React, { Component } from 'react'

export default class AddRewievWindow extends Component {
  constructor(props){
    super(props)
    this.state={
      img:'',
      name:'',
      lastName:'',
      comment:''
    }
  }



  render() {
    return (
      <div className='window-bg'>
        <form>
          <span onClick={()=>this.props.CloseaddRewievWindow()}>X</span>
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" id="name" placeholder='Name'onChange={(e)=>this.setState({name:e.target.value})}/>
          <label htmlFor="lastName">Enter Your LastName</label>
          <input type="text" id="lastName" placeholder='Last Name' onChange={(e)=>this.setState({lastName:e.target.value})}/>
          <label htmlFor="comment" >Say What You Think About Us</label>
          <textarea id="comment" placeholder='Add Your Rewiev Here' onChange={(e)=>this.setState({comment:e.target.value})}></textarea>
          <div className='addRewButtonWrapper'>
            <button type='button' onClick={()=>this.props.addRewiev(
              {
                img:'defaultPicture.jpg',
                firstName:this.state.name,
                lastName:this.state.lastName,
                comment:this.state.comment,
              }
            )}>Add</button>
          </div>
        </form>
      </div>  
    )
  }
}
