import PropTypes from 'prop-types';

import './champion.scss';
import HomeSection from '@/components/home-section/HomeSection';
import ChampionCard from './ChampionCard';


import { 
  bg2,
  champAshe,
  champAhri,
  champGaren,
  distortion
} from '@/assets/images';

import { championsData } from '@/assets/dummy';

import {
  Swiper,
  SwiperSlide
} from 'swiper/react';


const Champion = (props) => {
  return (
    <HomeSection
      className={`welcome ${props.isActive ? 'active' : ''}`}
      contentClassName="overlay welcome__content"
      bgImage={bg2}
    >
      <div className="container relative">
        <div className="champion-list">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={0}
            grabCursor={true}
            nested={true}
          >
            {championsData.map((item, index) => {
                // console.log(item);
              <SwiperSlide key={index}>
                <ChampionCard item={item} id={index} />
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </HomeSection>
  )
}

Champion.propTypes = {
  isActive: PropTypes.bool,
};

export default Champion
