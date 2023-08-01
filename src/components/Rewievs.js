import React,{ useRef, useState } from 'react'
import Rewiev from './Rewiev'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Rewievs = (props) => {
    return (
      <div className='rewievs-area'>
        <h1>What Our Clients Say</h1>



        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
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