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
    const mutants = ['+/-', '%'];

    // This guy gives us the non number buttons
    if (Number.isNaN(parseInt(buttonName, 10)) && buttonName !== '=' && buttonName !== '.') {
      if (!mutants.includes(buttonName)) {
        // This if block checks if the dataObjCopy ends with a . and avoids adding more ...
        // if (dataObjCopy.total.toString().endsWith('.', dataObjCopy.total.toString().length)) {
        //   dataObjCopy.operation = null;
        // } else {
        dataObjCopy.operation = buttonName;
        // }
      }
      if (dataObjCopy.total === null) {
        dataObjCopy.total = '0';
      }
    } else if (typeof (parseInt(buttonName, 10)) === 'number' && buttonName !== '=') { // this gives me the number buttons
      if (dataObjCopy.operation !== null) {
        if (dataObjCopy.next === null) {
          dataObjCopy.next = buttonName;
        } else {
          dataObjCopy.next += buttonName;
        }
      } else if (dataObjCopy.total === null) {
        dataObjCopy.total = buttonName;
      } else if (dataObjCopy.total !== null) {
        /* if you have a result that ia a number, this avoids concatenating
        numbers to value before appending an operation */
        if (typeof (dataObjCopy.total) === 'object') {
          dataObjCopy.total = buttonName;
        } else {
          dataObjCopy.total += buttonName;
        }
      }
    }
    this.setState({ dataObj: calculate(dataObjCopy, buttonName) });
  }

  render() {
    const { dataObj } = this.state;
    const nxt = dataObj.next;
    const opr = dataObj.operation;
    console.log(dataObj.total, nxt, opr);
    console.log(dataObj);
    return (
      <>
        <Display
          output={dataObj.total === null ? '0' : dataObj.total.toString()}
          nxt={nxt === null ? '' : nxt.toString()}
          opr={opr === null ? '' : opr.toString()}
        />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
