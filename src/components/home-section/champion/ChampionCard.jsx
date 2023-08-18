// import { useRef, useState } from 'react';
import './championcard.scss';

import PropTypes from 'prop-types';

const ChampionCard = (item) => {
  // const [...items] = item;
  // console.log({props})

  console.log({item})

  return (
    <div className='champion-card'>
      <div className="frame">
        <div className="bg-image overlay bg"
          style={{backgroundImage: `url(${item.bg})`}}>
        </div>

        <img src={item.img} alt={item.name} />
        <div className='name'>{item.name}</div>
      </div>
      
    </div>
  )
}

ChampionCard.prototypes = {
  item: PropTypes.array,
  bg: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
}

export default ChampionCard
