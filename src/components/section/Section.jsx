import './section.scss';
import PropTypes from 'prop-types';

const Section = (props) => {
  return (
    <div className={`section ${props.className}`}>
      {props.children}
    </div>
  )
}

export const SectionContent = (props) => {
  const bgImage = props.bgImage ? {
    backgroundImage: `url(${props.bgImage})`
  } : {}

  return (
    <div 
      className={`section__content ${props.className}`}
      style={bgImage}
    >
      {props.children}
    </div>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SectionContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  bgImage: PropTypes.string
};

export default Section
 