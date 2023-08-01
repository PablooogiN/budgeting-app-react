import logo from './logo.svg';
import './App.css';
import ChartData from './Components/Chart/ChartData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          50/30/20 Vizualizer
        </h1>
        <ChartData />
      </header>

    </div>
  );
}

export default App;
