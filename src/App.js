import React from 'react';
import './App.css';
import Search from "./Search"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="Dictionary.png"
          alt="Dictionary logo"
          className="logo"
        ></img>
        <Search />
      </header>
      <footer className='App-footer'>
        <p>
          This project was coded by{" "}
          <a className="App-link" href="#" target="_blank">
            Chelsea Brodin
          </a>{" "}
          and is{" "}
          <a
            className="App-link"
            href="https://github.com/cbrodin/app-react-dictionary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Open Sourced on Git-Hub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
