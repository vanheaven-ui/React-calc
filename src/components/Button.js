import PropTypes from 'prop-types';

const Button = ({ ButtonName }) => (
  <button type="button">{ButtonName}</button>
);

Button.defaultProps = {
  ButtonName: '--',
};

Button.propTypes = {
  ButtonName: PropTypes.string,
};

export default Button;
