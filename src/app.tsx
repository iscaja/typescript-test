import Clock from './components/clock'
import logo from './logo.svg';
import {StoreContext} from "./contexts";
import './app.css';
import {RootStore} from "./store";

interface AppProps {
  store: RootStore
}


function App(props:AppProps) {

  return (
    <div className="App">
      <header className="App-header">
        <StoreContext.Provider value={{...props.store}}>
          <Clock />
        </StoreContext.Provider>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
