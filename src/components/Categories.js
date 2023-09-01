import React, { Component, useEffect, useState } from 'react'
import { GiCarrot } from 'react-icons/gi';
import { GiFruitBowl } from 'react-icons/gi';
import { GiChipsBag } from 'react-icons/gi';
import { FaFish } from 'react-icons/fa';
import { GiBeerBottle } from 'react-icons/gi';
import { TfiLayoutGrid3 } from 'react-icons/tfi';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './categories.module.css'

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


const Categories = (props) => {
  const [categories , setCategories] = useState([
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
      name:"Fishes"
    },
    {
      key:"drink",
      icon:GiBeerBottle,
      name:"Drinks"
    }
  ])


  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false)

  useEffect(() => {
    // Function to check the screen size and update the state
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 1024);
    };
    const checkMobileScreenSize = () =>{
      setMobileScreen(window.innerWidth <= 600);
    }

    // Initial check when the component mounts
    checkScreenSize();
    checkMobileScreenSize();

    // Add a listener to update the state when the window is resized
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('resize', checkMobileScreenSize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('resize', checkMobileScreenSize);

    };
  }, []);

  const ScreenSize = () => {
    switch (true) {
      case mobileScreen:
        return 1;
      case isLargeScreen:
        return 4;
      default:
        return 6;
    }
  }

  
  return (
    <div className={styles.categories}>
      {/* {categories.map(el => (
        <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{<el.icon />}<p>{el.name}</p></div>
      ))} */}



      <Swiper
        slidesPerView={ScreenSize()}
        spaceBetween={30}
        Pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.mySwiper}
        >
    

        {categories.map(el => 
          <SwiperSlide key={el.id} className={styles.slide}>         
            <div className={styles.categoryDiv} key={el.key} onClick={()=>props.chooseCategory(el.key)}>
            <div className={styles.icon}>
              <el.icon />
            </div>
            <p>{el.name}</p> 
              </div>
          </SwiperSlide>  
        )}
           
    
      </Swiper>
    </div>
  )
}



export default Categories