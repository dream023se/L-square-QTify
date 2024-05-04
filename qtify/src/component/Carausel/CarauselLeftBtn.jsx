import React, { useEffect, useState } from 'react';
import {ReactComponent as LeftArrow} from '../../assets/left.svg';
import { useSwiper } from 'swiper/react';
import './Carausel.css'
const CarauselLeftBtn = () => {
    const swiper = useSwiper();
    const [isStart, setIsStart] = useState(swiper.isBeginning)
    useEffect(() =>{
        swiper.on("slideChange",() =>{
            setIsStart(swiper.isBeginning)
        })
    },[])
  return (
    <div className='leftBtn'>
       <LeftArrow onClick={() => swiper.slidePrev()}/>
    </div>
  )
}
export default CarauselLeftBtn