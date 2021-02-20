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
    stateCopy.total = 1;
    stateCopy.next = 4;
    stateCopy.operation = '+';
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
          onClick={() => calculate({ total: 0, next: 4, operation: '+' }, '=')}
        >
          Click Me
        </button>
      </>
    );
  }
}

export default App;
