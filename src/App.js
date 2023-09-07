import logo from './apple123.png';
import './App.css';
import Count from './Count';
import Simplefunc from './Simplefunc';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Hello World!
        </p>
       <Count />
       <Simplefunc />
       <Simplefunc />
      </header>
    </div>
  );
}

export default App;
