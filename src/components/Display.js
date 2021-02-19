import PropTypes from 'prop-types';

const Display = ({ output }) => (
  <div className="display-window">
    Output is:
    {' '}
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
