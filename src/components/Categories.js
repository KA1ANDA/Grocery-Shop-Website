import React, { Component } from 'react'
import { GiCarrot } from 'react-icons/gi';
import { GiFruitBowl } from 'react-icons/gi';
import { GiChipsBag } from 'react-icons/gi';
import { FaFish } from 'react-icons/fa';
import { GiBeerBottle } from 'react-icons/gi';
import { TfiLayoutGrid3 } from 'react-icons/tfi';


export default class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories:[
        {
          key:"Products",
          icon:TfiLayoutGrid3,
          name:"Show all"
        },
        {
          key:"Vagetables",
          icon:GiCarrot,
          name:"Vagetables"
        },
        {
          key:"Fruits",
          icon:GiFruitBowl,
          name:"Fruits"
        },
        {
          key:"Snacks",
          icon:GiChipsBag,
          name:"Snacks"
        },
        {
          key:"Sea Products",
          icon:FaFish,
          name:"Sea Products"
        },
        {
          key:"drink",
          icon:GiBeerBottle,
          name:"Drinks"
        }
      ]
    }
  }


  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
          <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{<el.icon />}<p>{el.name}</p></div>
        ))}
      </div>
    )
  }
}
