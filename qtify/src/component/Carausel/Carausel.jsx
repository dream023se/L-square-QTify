import React from 'react'
import { useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Carausel.css'
import { Navigation, Pagination } from 'swiper/modules';
import { useSwiper } from 'swiper/react';
import CarauselLeftBtn from './CarauselLeftBtn';
import CarauselRightBtn from './CarauselRightBtn';
// import './styles.css';
import Cards from '../Card/Cards';

const Controls = ({data}) =>{
    const swiper = useSwiper();
    useEffect(() =>{
        swiper.slideTo(0)
    },[data])
}
const Carausel = ({data}) => {
  return (
    <div>
      <>
      <Swiper
      spaceBetween={42}
      slidesPerView={"auto"}
    initialSlide={0}
      modules={[Navigation]}
        className="mySwiper"

      >
        <Controls data = {data} />
        <CarauselLeftBtn />
        <CarauselRightBtn />
        {data.map((item,index) =>(<SwiperSlide key={index}><Cards data={item} /></SwiperSlide>))}
        
        
      </Swiper>
    </>
    </div>
  )
}

export default Carausel
