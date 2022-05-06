import './App.css';
import NumKeys from './components/NumKeys';
import MathematicalKeys from './components/MathematicalKeys';
import Display from './components/Display';

function App() {
  const numArr = [{
    num: 0,
    id: 'zero'
  }, {
    num: 1,
    id: 'one'
  }, {
    num: 2,
    id: 'two'
  }, {
    num: 3,
    id: 'three'
  }, {
    num: 4,
    id: 'four'
  }, {
    num: 5,
    id: 'five'
  }, {
    num: 6,
    id: 'six'
  }, {
    num: 7,
    id: 'seven'
  }, {
    num: 8,
    id: 'eight'
  }, {
    num: 9,
    id: 'nine'
  }]
  const mathematicalSymbolArr = [{
    symbol: '+',
    id: 'add'
  }, {
    symbol: '-',
    id: 'subtract'
  }, {
    symbol: '*',
    id: 'multiply'
  },
  {
    symbol: '/',
    id: 'divide'
  },
  {
    symbol: '=',
    id: 'equals'
  },
  {
    symbol: '.',
    id: 'decimal'
  },
  {
    symbol: 'clear',
    id: 'clear'
  },]

  return (
    <div className="App">
      <NumKeys numArr={numArr} />
      <MathematicalKeys mathArr={mathematicalSymbolArr} />
      <Display />
    </div>
  );
}

export default App;
