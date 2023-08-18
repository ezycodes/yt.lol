import { useEffect, useRef } from 'react';

import './welcome.scss';

import PropTypes from 'prop-types';

import HomeSection from '@/components/home-section/HomeSection';
import Button from '@/components/button/Button';
import hoverEffect from 'hover-effect';

import { 
  bg1,
  champAshe,
  champAhri,
  champGaren,
  distortion
} from '@/assets/images';

import { welcomeDetails } from '@/assets/dummy';


const champImgs = [champAshe, champAhri, champGaren]

const Welcome = (props) => {

    useEffect(() => {
        const welcomeImgs = document.querySelectorAll('.welcome__img__slide > img')
        let animates = []
        
        welcomeImgs.forEach((item, index) => {
          let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
          let animation = new hoverEffect({
              parent: document.querySelector('#welcome__img__slide'),
              intensity: 0.5,
              image1: item.getAttribute('src'),
              image2: nextImg,
              displacementImage: distortion,
              hover: false
          })
          animates.push(animation)
          // console.log({animates})
        })

        welcomeImgs.forEach(e => e.remove())

        let currItem = 0

        const autoImageSlide = async () => {
            let prevItem = currItem
            currItem = (currItem + 1) % animates.length

            console.log(animates.length)
            if (!document.hidden) {
              await animates[prevItem].next()
            }

            setTimeout(() => {
                let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
                document.querySelector('#welcome__img__slide').appendChild(canvas[0])
                animates[prevItem].previous()
            }, 3000);
        }

        setInterval(autoImageSlide, 3000);
    }, [])



  return (
    <HomeSection
      className={`welcome ${props.isActive ? 'active' : ''}`}
      contentClassName="overlay welcome__content"
      bgImage={bg1}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>{welcomeDetails.span}</span>
            <h2 className="main-color">{welcomeDetails.h2}</h2>
          </div>
          <div className="description mt-4">
            {welcomeDetails.desc}
          </div>
          <div className="btns mt-4">
            <Button className='btn-main'>PLAY NOW</Button>
            <Button className='btn-second'>GET STARTED</Button>
          </div>
        </div>
      </div>

      <div className="welcome__img relative">
        <div className="welcome__img__slide" 
          id="welcome__img__slide">  
          {champImgs.map((item, index) => (
              <img src={item} key={index} className="img__slide" />
            )
          )}
        </div>
      </div>
    </HomeSection>
  )
}

Welcome.propTypes = {
  isActive: PropTypes.bool,
};

export default Welcome
