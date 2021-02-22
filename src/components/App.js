import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataObj: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const stateCopy = { ...this.state };
    const dataObjCopy = stateCopy.dataObj;

    if (Number.isNaN(parseInt(buttonName, 10)) && buttonName !== '=') {
      dataObjCopy.operation = buttonName;
      if (buttonName === '.') {
        if (dataObjCopy.next === null) {
          dataObjCopy.total += buttonName;
        } else if (dataObjCopy.next !== null) {
          dataObjCopy.next += buttonName;
        }
      }
    } else if (typeof (parseInt(buttonName, 10)) === 'number' && buttonName !== '=') {
      if (dataObjCopy.operation !== null) {
        if (dataObjCopy.next === null) {
          dataObjCopy.next = buttonName;
        } else {
          dataObjCopy.next += buttonName;
        }
      } else if (dataObjCopy.total === null) {
        dataObjCopy.total = buttonName;
      } else if (dataObjCopy.total !== null) {
        dataObjCopy.total += buttonName;
      }
    }
    this.setState({ dataObj: calculate(dataObjCopy, buttonName) });
    console.log(dataObjCopy, buttonName);
  }

  render() {
    const { dataObj } = this.state;
    console.log(typeof (dataObj.total));
    return (
      <>
        <Display
          output={dataObj.total === null ? '0' : dataObj.total.toString()}
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
