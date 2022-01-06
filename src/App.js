import logo from './octopus.png';
import './App.css';
import TestQuiz from './components/TestQuiz';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://testing-library.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TestQuiz/>
      </header>
      <div></div>
    </div>
  );
}

export default App;
