import logo from './logo.svg';
import './styles.css';
import { Stopwatch } from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Stopwatch </p>
        <Stopwatch />
      </header>
    </div>
  );
}

export default App;
