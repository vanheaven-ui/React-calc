import React, { useState } from 'react';
import ButtonPanel from '../ButtonPanel';
import Display from '../Display';
import Navbar from '../Navbar';
import calculate from '../../logic/calculate';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = buttonName => {
    const mutants = ['+/-', '%'];

    if (
      Number.isNaN(parseInt(buttonName, 10))
      && buttonName !== '='
      && buttonName !== '.'
    ) {
      if (!mutants.includes(buttonName)) {
        state.operation = buttonName;
      }
      if (state.total === null) {
        state.total = '0';
      }
    } else if (
      typeof parseInt(buttonName, 10) === 'number'
      && buttonName !== '='
      && buttonName !== '.'
    ) {
      // this gives me the number buttons
      if (state.operation !== null) {
        if (state.next === null) {
          state.next = buttonName;
        } else {
          state.next += buttonName;
        }
      } else if (state.total === null) {
        state.total = buttonName;
      } else if (state.total !== null) {
        if (typeof state.total === 'object') {
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
      <Navbar />
      <article className="calc-section">
        <h2>Mathematics is a daily vital!!!</h2>
        <div className="calc">
          <Display
            output={state.total === null ? '0' : state.total.toString()}
            nxt={state.next === null ? '' : state.next.toString()}
            opr={state.operation === null ? '' : state.operation.toString()}
          />
          <ButtonPanel clickHandler={handleClick} />
        </div>

      </article>
    </>
  );
};

export default App;
