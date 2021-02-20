import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const stateCopy = { ...this.state };
    stateCopy.total = '0';
    if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) {
      stateCopy.next = buttonName;
    }

    if (['AC', '%', '÷', '+', 'x', '%', '.', '=', '+/-', '-'].includes(buttonName)) {
      stateCopy.operation = buttonName;
    }

    this.setState({
      total: '0',
      next: (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(buttonName)) ? buttonName : null,
      operation: (['AC', '%', '÷', 'x', '%', '.', '=', '+/-', '-'].includes(buttonName)) ? buttonName : null,
    });

    // console.log(this.state, buttonName);
    console.log(stateCopy, buttonName);
    // calculate(this.state, buttonName);
  }

  render() {
    return (
      <>
        <Display />
        <ButtonPanel onClick={buttonName => this.handleClick(buttonName)} />
        <button
          type="button"
          onClick={() => calculate({ total: 0, next: 4, operation: '+' }, 'Click me')}
        >
          Click Me
        </button>
      </>
    );
  }
}

export default App;
