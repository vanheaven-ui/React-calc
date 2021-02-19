import PropTypes from 'prop-types';

const Display = ({ output }) => (
  <div className="display-window">
    {output}
  </div>
);

Display.defaultProps = {
  output: '0',
};

Display.propTypes = {
  output: PropTypes.string,
};

export default Display;
