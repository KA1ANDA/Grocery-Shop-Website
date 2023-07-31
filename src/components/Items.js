import React, { Component, useContext, useState } from 'react'
import Item from './Item'

const Items = (props) => {
  // const [orderedItem , setOrderedItem] = useState([])


  //  const addToCart = (addedItem) =>{
  //   setOrderedItem(prevOrderedItems => [
  //     ...prevOrderedItems,
  //     addedItem
  //   ]);
  // }


    return (
      <main>
        {props.items.map(el =>
           <Item item={el} key={el.id} addOrder={props.addOrder} addToCart={props.addToCart}/> )}
      </main>
    )
}

export default Items
