import React, {useEffect, useState} from 'react'
import { GiShoppingCart } from 'react-icons/gi';
import { MdShoppingBasket } from 'react-icons/md';
import Orders from './Orders';
import presntImage from '../img/presentation-img.jpg'
import {RxHamburgerMenu} from 'react-icons/rx'
import Navigation from './Navigation';
import OrdersFull from './OrdersFull';
import OrdersEmpty from './OrdersEmpty';


// const ordersFull = (props) =>{
//   const totalAmount = props.showOrders.map(el => el.price)
//   return(
//     <>
//       <div className='fullOrdersWrapper'>
//             {props.showOrders.map(el =>
//               ( <Orders order={el} key={el.id} orderCancel={props.orderCancel}/>) )}
//       </div>

//       <div className='totalInfoWrapper'>
//         <div>
//           Total :  $ {totalAmount.reduce((accumulator, currentValue) => accumulator + currentValue, 0)} 
//         </div>
//         <div>
//           <button class="Btn">
//             Pay
//             <svg class="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
//           </button>
//         </div>  
//       </div>
//     </>
//   )
// }

// const ordersEmpty = () =>{
//   return(
//     <div className='empty' > 
//       <h2>You Do Not Have Any Orders</h2>
//     </div>
//   )
// }


export default function Header(props) {
  let [cartOpen,setCartopen] = useState(false)

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  // const [menu , setMenu] = useState(false)

  useEffect(() => {
    // Function to check the screen size and update the state
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 768);
    };

    // Initial check when the component mounts
    checkScreenSize();

    // Add a listener to update the state when the window is resized
    window.addEventListener('resize', checkScreenSize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  // const toggleMenu = () => {
  //   setMenu(!menu)
  // }


  const toggleCartOpen = () =>{
    setCartopen(cartOpen=!cartOpen)
  }


  return (
    <header>
      <div className='nav-and-logo'>
        <span className='logo'>           
          <GiShoppingCart /> <span>eGrocery</span>
        </span>
        {isLargeScreen ? 
        <div className='showMore' onClick={props.toggleMenu}>
          <RxHamburgerMenu/>
        </div>
        :
        // <ul className='nav'>
        //   <li><span><MdShoppingBasket className={`shop-cart-button ${cartOpen && 'active'}`} onClick={()=>setCartopen(cartOpen=!cartOpen)}/></span></li>
        //   <li>Home</li>
        //   <li>Categories</li>
        //   <li>Rewievs</li>
        //   <li>Our app</li>
        // </ul>
        <Navigation toggleCartOpen={toggleCartOpen} cartOpen={cartOpen}/>
        }
        
      </div>

      {cartOpen && (
        <div className='shop-cart'>
          {/* {props.showOrders.length > 0 ? ordersFull(props): ordersEmpty()} */}
          {props.showOrders.length > 0 ? <OrdersFull showOrders={props.showOrders} orderCancel={props.orderCancel}/>: <OrdersEmpty/>}

        </div>
      )}

      <div className='presentation'><img className='surati' src={presntImage}/></div>
    </header>

  )

}



