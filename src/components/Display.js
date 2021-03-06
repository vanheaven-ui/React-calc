import PropTypes from 'prop-types';

const Display = ({ output, nxt, opr }) => (
  <div className="display-window" data-testid="div">
    {output}
    {opr === '%' ? '' : opr}
    {nxt}
  </div>
);

Display.defaultProps = {
  output: '0',
  nxt: '',
  opr: '',
};

Display.propTypes = {
  output: PropTypes.string,
  nxt: PropTypes.string,
  opr: PropTypes.string,
};

export default Display;
