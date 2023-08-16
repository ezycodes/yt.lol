import './welcome.scss';

import PropTypes from 'prop-types';

import HomeSection from '@/components/home-section/HomeSection';
import { bg1 } from '@/assets/images';
import { welcomeDetails } from '@/constants/details';

const Welcome = (props) => {

  return (
    <HomeSection
      className={` welcome ${props.isActive ? 'active' : ''}`}
      contentClassName="overlay welcome_content"
      bgImage={bg1}
    >
      <div className="container welcome__info relative">
        <div className="welcome__info_content">
          <div className="title">
            <span>{welcomeDetails.span}</span>
            <h2 className="main-color">{welcomeDetails.h2}</h2>
          </div>
          <div className="description mt-4">
            {welcomeDetails.desc}
          </div>
          <div className="btns mt-4">
            <button>PLAY NOW</button>
            <button>GET STARTED</button>
          </div>
        </div>

      </div>
      {/* <img src={bg1} alt="" /> */}
      {/* welcome */}

      
    </HomeSection>
  )
}

Welcome.propTypes = {
  isActive: PropTypes.bool, // Make sure to adjust the prop type accordingly
};

export default Welcome
