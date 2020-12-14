import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Theme from "./Theme";
import List from "./List";

function App() {
  const [theme, setTheme] = useState({
    name: "Light",
  });

  const [displayList, setDisplayList] = useState(true);

  const toggleTheme = () => {
    if (theme.name === "Dark") setTheme({ name: "Light" });
    else setTheme({ name: "Dark" });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Theme theme={theme} toggleTheme={toggleTheme} />
        <button onClick={() => setDisplayList(!displayList)}>
          Toggle list view
        </button>
        {displayList && <List />}
        {!displayList && "Masked list"}
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
