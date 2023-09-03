import React, { Component, useState } from 'react'
import { RiShoppingBasketLine } from 'react-icons/ri';


const Item = (props) => {
  
  const [amount , setAmount] = useState(1)
  const [itemPrice , setItemPrice] = useState(props.item.price)

  // const [orderedItem , setOrderedItem] = useState([])

  // const [cart , setCart] = useState([])
  







  const addQuantity = () => {
    setAmount(amount+1)
    setItemPrice(itemPrice+props.item.price)
  }

  const removeQuantity = () => {
    setAmount(amount-1)
    setItemPrice(itemPrice-props.item.price)

  }

  // const addToCart = () =>{
  //   setOrderedItem(prevOrderedItems => [
  //     ...prevOrderedItems,
  //     {
  //       image: props.item.img,
  //       title: props.item.title,
  //       productQuantity: amount,
  //       price: itemPrice
  //     }
  //   ]);

    // setCart(orderedItem)

  // }

  // const itemsContext = React.createContext({
  //         image: props.item.img,
  //         title: props.item.title,
  //         productQuantity: amount,
  //         price: itemPrice
  //       });
  
    return (
      <div className='item'>
        <img src={"./img/"+props.item.img}/>
        <h2>{props.item.title}</h2>
        <p>Product Weight: {props.item.weight}</p>
        <b>${itemPrice}</b>
        <div className='add-more-less'>
          <div className='amount'>
            <div className='less' onClick={amount!=1 ? removeQuantity : null}>-</div>
            <h3>{amount}</h3>
            <div className='more' onClick={addQuantity}>+</div>
          </div>   
          <div className='add-to-cart' onClick={() => props.addToCart({
            id:props.item.id,
            img: props.item.img,
            title: props.item.title,
            productQuantity: amount,
            price: itemPrice
          })} ><RiShoppingBasketLine className='icon' /></div>
        </div>

      </div>
  )
}

export default Item
