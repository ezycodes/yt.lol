import Section, { SectionContent } from '../section/Section';

import PropTypes from 'prop-types';

const HomeSection = (props) => {
  
  return (
    <Section
      className={props.className}
    >

      <SectionContent
        className={props.contentClassName}
        bgImage={props.bgImage}
      >

        {props.children}

      </SectionContent>
      
    </Section>
  )
}

HomeSection.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  bgImage: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};


export default HomeSection
