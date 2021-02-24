import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const mutants = ['+/-', '%'];

    if (Number.isNaN(parseInt(buttonName, 10)) && buttonName !== '=' && buttonName !== '.') {
      if (!mutants.includes(buttonName)) {
        state.operation = buttonName;
      }
      if (state.total === null) {
        state.total = '0';
      }
    } else if (typeof (parseInt(buttonName, 10)) === 'number' && buttonName !== '=' && buttonName !== '.') { // this gives me the number buttons
      if (state.operation !== null) {
        if (state.next === null) {
          state.next = buttonName;
        } else {
          state.next += buttonName;
        }
      } else if (state.total === null) {
        state.total = buttonName;
      } else if (state.total !== null) {
        if (typeof (state.total) === 'object') {
          state.total = buttonName;
        } else {
          state.total += buttonName;
        }
      }
    }
    setState(calculate(state, buttonName));
  };
  return (
    <>
      <Display
        output={state.total === null ? '0' : state.total.toString()}
        nxt={state.next === null ? '' : state.next.toString()}
        opr={state.operation === null ? '' : state.operation.toString()}
      />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dataObj: {
//         total: null,
//         next: null,
//         operation: null,
//       },
//     };
//   }

//   handleClick = buttonName => {
//     const stateCopy = { ...this.state };
//     const dataObjCopy = stateCopy.dataObj;
//     const mutants = ['+/-', '%'];

//     if (Number.isNaN(parseInt(buttonName, 10)) && buttonName !== '=' && buttonName !== '.') {
//       if (!mutants.includes(buttonName)) {
//         dataObjCopy.operation = buttonName;
//       }
//       if (dataObjCopy.total === null) {
//         dataObjCopy.total = '0';
//       }
//     } else if (typeof (parseInt(buttonName, 10)) === 'number'
// && buttonName !== '=' && buttonName !== '.') { // this gives me the number buttons
//       if (dataObjCopy.operation !== null) {
//         if (dataObjCopy.next === null) {
//           dataObjCopy.next = buttonName;
//         } else {
//           dataObjCopy.next += buttonName;
//         }
//       } else if (dataObjCopy.total === null) {
//         dataObjCopy.total = buttonName;
//       } else if (dataObjCopy.total !== null) {
//         if (typeof (dataObjCopy.total) === 'object') {
//           dataObjCopy.total = buttonName;
//         } else {
//           dataObjCopy.total += buttonName;
//         }
//       }
//     }
//     this.setState({ dataObj: calculate(dataObjCopy, buttonName) });
//   }

//   render() {
//     const { dataObj } = this.state;
//     const nxt = dataObj.next;
//     const opr = dataObj.operation;
//     return (
//       <>
//         <Display
//           output={dataObj.total === null ? '0' : dataObj.total.toString()}
//           nxt={nxt === null ? '' : nxt.toString()}
//           opr={opr === null ? '' : opr.toString()}
//         />
//         <ButtonPanel clickHandler={this.handleClick} />
//       </>
//     );
//   }
// }

// export default App;
