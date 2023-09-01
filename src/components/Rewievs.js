import React,{ useEffect, useRef, useState } from 'react'
import Rewiev from './Rewiev'
import styles from './rewievs.module.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Rewievs = (props) => {

  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false)

  useEffect(() => {
    // Function to check the screen size and update the state
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth <= 1280);
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
        return 2;
      default:
        return 3;
    }
  }


    return (
      <div className='rewievs-area'>
        <h1>What Our Clients Say</h1>



        <Swiper
          slidesPerView={ScreenSize()}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={styles.mySwiper}
        >
    

              {props.rewievs.map(el => 
                <SwiperSlide key={el.id} className='rewievs'>
                  {/* {el.firstName} */}
                  <div className='rewiev'>
                    <div className='user-photo'>
                      <img src={"./img/userImgs/"+el.img} />
                    </div>
                    <div className='name'>
                      <div>{el.firstName}</div>
                      <div className='lastName'> {el.lastName}</div>
                    </div>
                    <p>{el.comment}</p>
                  </div>
                  </SwiperSlide>  
              )}
           
    
        </Swiper>









        <div className='button-wrapper'>
          <button onClick={()=>props.OpenaddRewievWindow()}>Add Rewiev</button>
        </div>
      </div>
    )
}


export default Rewievs