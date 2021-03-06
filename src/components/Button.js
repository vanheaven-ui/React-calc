import PropTypes from 'prop-types';

const Button = ({
  ButtonName, color, wide, clickHandler,
}) => (
  <button
    type="button"
    className={color + (wide ? ' double-btn' : ' default-btn')}
    onClick={() => clickHandler(ButtonName)}
  >
    {ButtonName}
  </button>
);

Button.defaultProps = {
  ButtonName: ' ',
  color: '#f5913e',
  wide: false,
};

Button.propTypes = {
  ButtonName: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
