import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };

  const renderButton = name => (
    <Button
      ButtonName={name}
      color={['÷', 'x', '-', '+', '='].includes(name) ? 'default-btn-color' : 'grey-btn'}
      wide={name === '0'}
      clickHandler={name => handleClick(name)}
    />
  );
  return (
    <div className="btn-panel">
      <div className="btn-group">
        { renderButton('AC')}
        { renderButton('+/-')}
        { renderButton('%')}
        { renderButton('÷')}
      </div>
      <div className="btn-group">
        { renderButton('7')}
        { renderButton('8')}
        { renderButton('9')}
        { renderButton('x')}
      </div>
      <div className="btn-group">
        { renderButton('4')}
        { renderButton('5')}
        { renderButton('6')}
        { renderButton('-')}
      </div>
      <div className="btn-group">
        { renderButton('1')}
        { renderButton('2')}
        { renderButton('3')}
        { renderButton('+')}
      </div>
      <div className="btn-group">
        { renderButton('0')}
        { renderButton('.')}
        { renderButton('=')}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
