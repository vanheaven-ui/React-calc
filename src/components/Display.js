import PropTypes from 'prop-types';

const Display = ({ output }) => (
  <div
    className="display-window"
    style={{
      border: '3px solid red',
      width: 'max-content',
      margin: '0 auto',
      padding: '2px 10px',
      marginBottom: '10px',
    }}
  >
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
