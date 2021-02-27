import React, { useState } from 'react';
import ButtonPanel from '../ButtonPanel';
import Display from '../Display';
import Navbar from '../Navbar';
import calculate from '../../logic/calculate';
import GetHistory from '../History';

const App = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [loadHist, setLoadHist] = useState(false);

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

  const getHistory = () => {
    setLoadHist(true);
  };

  const closeHistory = () => {
    setLoadHist(false);
  };

  return (
    <>
      <Navbar />
      <article className="calc-section">
        <div className="calc-history">
          <h2>Mathematics is a daily vital!!!</h2>
          {loadHist && <button className="close-hist-btn" type="submit" onClick={closeHistory}>Close History</button>}
          {!loadHist && <button className="hist-btn" type="submit" onClick={getHistory}>Get History</button>}
          {loadHist && <GetHistory />}
        </div>
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
