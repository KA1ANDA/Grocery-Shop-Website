import React, {useState} from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { MdShoppingBasket } from 'react-icons/md';
import Orders from './Orders';


const ordersFull = (props) =>{
  const totalAmount = props.showOrders.map(el => el.price)
  return(
    <div>
      {props.showOrders.map(el =>
        ( <Orders order={el} key={el.id} orderCancel={props.orderCancel}/>) )}
        <div>
          <div>
            Total :  $ {totalAmount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)} 
          </div>
          <div>
            Order Now
          </div>  
        </div>
    </div>
  )
}

const ordersEmpty = () =>{
  return(
    <div className='empty' > 
      <h2>You Do Not Have Any Orders</h2>
    </div>
  )
}


export default function Header(props) {
  let [cartOpen,setCartopen] = useState(false)

  return (
    <header>
      <div className='nav-and-logo'>
        <span className='logo'>           
          <GiShoppingCart /> <span>eGrocery</span>
        </span>
        <ul className='nav'>
          <li><span><MdShoppingBasket className={`shop-cart-button ${cartOpen && 'active'}`} onClick={()=>setCartopen(cartOpen=!cartOpen)}/></span></li>
          <li>Home</li>
          <li>Categories</li>
          <li>Rewievs</li>
          <li>Our app</li>
        </ul>
      </div>

      {cartOpen && (
        <div className='shop-cart'>
          {props.showOrders.length > 0 ? ordersFull(props): ordersEmpty()}
        </div>
      )}

      <div className='presentation'></div>
    </header>

  )

}



