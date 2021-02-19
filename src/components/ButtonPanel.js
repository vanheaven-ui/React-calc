import Button from './Button';

const ButtonPanel = () => {
  const renderButton = name => (
    <Button
      ButtonName={name}
      color={['+', '-', 'X', '/', '='].includes(name) ? 'default-btn-color' : 'grey-btn'}
      wide={name === '0'}
    />
  );
  return (
    <div className="btn-panel">
      <div className="btn-group">
        { renderButton('AC')}
        { renderButton('+/-')}
        { renderButton('%')}
        { renderButton('/')}
      </div>
      <div className="btn-group">
        { renderButton('7')}
        { renderButton('8')}
        { renderButton('9')}
        { renderButton('X')}
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

export default ButtonPanel;
