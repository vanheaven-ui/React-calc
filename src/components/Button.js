import PropTypes from 'prop-types';

const Button = ({ ButtonName, color, wide }) => (
  <button
    type="button"
    className={color + (wide ? ' double-btn' : ' default-btn')}
  >
    {ButtonName}
  </button>
);

Button.defaultProps = {
  ButtonName: '--',
};

Button.propTypes = {
  ButtonName: PropTypes.string,
};

export default Button;
