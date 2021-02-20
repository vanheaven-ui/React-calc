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
    calculate(this.state, buttonName);
  }

  render () {
    return (
      <>
        <Display />
        <ButtonPanel handleClick={this.handleClick}/>
      </>
    )
  }
}

// function App() {
//   return (
//     <>
//       <Display />
//       <ButtonPanel />
//       <button
//         type="button"
//         onClick={() => {
//           calculate({ total: 1, next: 0, operation: '+' }, '=');
//           const display = document.querySelector('.display-window');
//           const div = document.createElement('div');
//           div.setAttribute('style', 'font-size: 24px; width: max-content; margin: 0 auto; color: green;');
//           div.innerHTML = 'Just a placeholder!';
//           display.insertAdjacentElement('beforebegin', div);

//           setTimeout(() => {
//             div.remove();
//           }, 2000);
//         }}
//       >
//         PlaceHolder Btn
//       </button>
//     </>
//   );
// }

export default App;
