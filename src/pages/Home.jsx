import {
  Swiper,
  SwiperSlide
} from 'swiper/react';

import {
  EffectFade, Mousewheel, Pagination
} from 'swiper/modules';

import { Welcome } from '@/components/home-section';


const Home = () => {
  return (
    <>
      <Swiper 
        modules = {[EffectFade, Mousewheel, Pagination]}
        direction= 'vertical'
        slidesPerView = {1}
        spaceBetween = {0}
        mousewheel = {true}
        pagination = {true}
        effect = 'fade'
        speed = {1000}
      >
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>
        <SwiperSlide>
          slide 2
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Home
