import './button.scss';

import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className={`btn ${props.className}`}>
      {props.children}
    </button>
  )
}


Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button
