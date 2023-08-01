import React, { Component } from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from './components/Items'
import Categories from './components/Categories'
import Rewievs from './components/Rewievs'
import AddRewievWindow from './components/AddRewievWindow'
import OrderNotification from './components/OrderNotification'
import sound from "./sounds/success.ogg"


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // orders:[],
      orderedItem:[],
      currentItems:[],
      wishedItem:'',
      notification:false,
      items:[
        {
          id:1,
          title:'Cabbage',
          img:'Cabbage.jpg',
          weight:'1kg',
          category:'vagetable',
          price:7,
          quantity:1
        },
        {
          id:2,
          title:'Chinese Cabbage',
          img:'Chinese Cabbage.jpg',
          weight:'1kg',
          category:'vagetable',
          price:5,
          quantity:1
        },
        {
          id:3,
          title:'Potato',
          weight:'1kg',
          img:'Potato.jpg',
          category:'vagetable',
          price:4,
          quantity:1
        },
        {
          id:4,
          title:'Cucumber',
          img:'Cucumber.jpg',
          category:'vagetable',
          weight:'1kg',
          price:6,
          quantity:1
        },
        {
          id:5,
          title:'Tomato',
          img:'Tomato.jpg',
          category:'vagetable',
          weight:'1kg',
          price:5,
          quantity:1
        },
        {
          id:6,
          title:'Apple',
          img:'Apple.jpg',
          category:'fruit',
          weight:'1kg',
          price:9,
          quantity:1
        },
        {
          id:7,
          title:'Papaya',
          img:'Papaya.jpg',
          category:'fruit',
          weight:'1kg',
          price:14,
          quantity:1
        },
        {
          id:8,
          title:'Banana',
          img:'Banana.jpg',
          category:'fruit',
          weight:'1kg',
          price:9,
          quantity:1
        },
        {
          id:9,
          title:'Caramel Candy',
          img:'Caramel Candy.jpg',
          category:'snack',
          weight:'800g',
          price:14,
          quantity:1
        },
        {
          id:10,
          title:'Purple Cabbage',
          img:'Purple Cabbage.jpg',
          weight:'1kg',
          category:'vagetable',
          price:9,
          quantity:1
        },
        {
          id:11,
          title:'Onion',
          img:'Onion.jpg',
          weight:'1kg',
          category:'vagetable',
          price:4,
          quantity:1
        },
        {
          id:12,
          title:'Strawberry',
          img:'Strawberry.jpg',
          weight:'1kg',
          category:'fruit',
          price:11,
          quantity:1
        },
        {
          id:13,
          title:'Orca',
          img:'Orca.jpg',
          weight:'1kg',
          category:'fish',
          price:25,
          quantity:1
        },
        {
          id:14,
          title:'Flipper',
          img:'Flipper.jpg',
          weight:'1kg',
          category:'fish',
          price:31,
          quantity:1
        },
        {
          id:15,
          title:'Octopus',
          img:'octopus.jpg',
          weight:'1kg',
          category:'fish',
          price:56,
          quantity:1
        },
        {
          id:16,
          title:'Crevet',
          img:'Crevet.jpg',
          weight:'1kg',
          category:'fish',
          price:40,
          quantity:1
        }
      ],
      // amount:[],
      // ItemPrice:[],
      rewievs:[
        {
          id:1,
          img:'defaultPicture.jpg',
          firstName:'Laura',
          lastName:'Menson',
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id:2,
          img:'defaultPicture.jpg',
          firstName:'Mike',
          lastName:'Schmidt',
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id:3,
          img:'defaultPicture.jpg',
          firstName:'Robin',
          lastName:'Schmidt',
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id:4,
          img:'defaultPicture.jpg',
          firstName:'Robin',
          lastName:'Schmidt',
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
          id:5,
          img:'defaultPicture.jpg',
          firstName:'Robin',
          lastName:'Schmidt',
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        ,
        {
          id:6,
          img:'defaultPicture.jpg',
          firstName:'Robin',
          lastName:'Schmidt',
          comment:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ],
      OpenaddRewievWindow:false
      
    }
    this.state.currentItems = this.state.items
    this.addRewiev = this.addRewiev.bind(this)
    this.CloseaddRewievWindow = this.CloseaddRewievWindow.bind(this)
    this.OpenaddRewievWindow = this.OpenaddRewievWindow.bind(this)
    // this.removeQuantity = this.removeQuantity.bind(this)
    // this.addQuantity = this.addQuantity.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    // this.addToOrder = this.addToOrder.bind(this)
    this.orderCancel = this.orderCancel.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.deleteNotification = this.deleteNotification.bind(this)

  }

  // componentDidMount() {
  //   const soundEffect = new Howl({
  //     src: ['./sounds/success.ogg'],
  //     volume: 0.5, // Adjust the volume as needed (0.0 to 1.0)
  //   });
  // }


  // componentDidMount() {
  //   if (this.state.notification) {
  //     setTimeout(() => {
  //       this.deleteNotification();
  //       console.log(this.state.notification)
  //     }, 2000);
  //   }
  // }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.notification !== prevState.notification) {
      setTimeout(() => {
        this.deleteNotification();
      }, 3500);
    }
  }

  render() {
    console.log(this.state.notification)
    return (
      <div className="app">
        <div className="wrapper">
          <Header showOrders={this.state.orderedItem} orderCancel={this.orderCancel} />
          <h2 className='category-title'>Category</h2>
          <Categories chooseCategory={this.chooseCategory}/>
          <h2 className='product-title'>Products</h2>
          <Items items={this.state.currentItems} addToCart={this.addToCart}  addQuantity={this.addQuantity} amount={this.state.amount} removeQuantity={this.removeQuantity}/>
        </div>
        {this.state.OpenaddRewievWindow&&(
           <AddRewievWindow CloseaddRewievWindow={this.CloseaddRewievWindow} addRewiev={this.addRewiev}/>
        )}

         {this.state.notification &&( 
           <OrderNotification notification={this.state.notification} wishedItem={this.state.wishedItem}/>
         )}
        <Rewievs rewievs={this.state.rewievs} OpenaddRewievWindow={this.OpenaddRewievWindow}/>
        <Footer />   
      </div>
    )
  }


  addToCart(addedItem){
    // this.state.orderedItem.filter(el => el.id !== id)
    const updatedOrderedItems = [...this.state.orderedItem.filter(el => el.id !== addedItem.id), addedItem];
    this.setState({ orderedItem: updatedOrderedItems });
    this.setState({ notification: true });
    this.setState({wishedItem:addedItem.title})
    new Audio(sound).play()

  }


  deleteNotification(){
    this.setState({ notification: false });
  }



  addRewiev(newRewiev){
    const id = this.state.rewievs.length + 1
    this.setState({rewievs:[...this.state.rewievs,{id,...newRewiev}]})
  }


  CloseaddRewievWindow(){
    this.setState({OpenaddRewievWindow:false})
  }


  OpenaddRewievWindow(){
    this.setState({OpenaddRewievWindow:true})
  }


  // addQuantity(item){
  //  this.setState({amount:item.quantity+=1})
  //  this.setState({amountPrice:item.price*=item.quantity})
  //  console.log(this.state.amountPrice)
  // }


  // removeQuantity(item){
  //   if(item.quantity<=1){
  //     this.setState({amount:item.quantity})
  //   }
  //   else{
  //     this.setState({amount:item.quantity-=1})
  //   }
  // }



  chooseCategory(category){
    if(category==="all"){
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }


  orderCancel(id) {
    this.setState({orderedItem: this.state.orderedItem.filter(el => el.id !== id)})
  }


}

