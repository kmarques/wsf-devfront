import React, { useState, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import Theme from "./Theme";
import List from "./components/List/List";
import ListProvider from "./contexts/ListContext";

function App() {
  const [theme, setTheme] = useState({
    name: "Light",
  });

  const [displayList, setDisplayList] = useState(true);

  const toggleTheme = () => {
    if (theme.name === "Dark") setTheme({ name: "Light" });
    else setTheme({ name: "Dark" });
  };

  return useMemo(
    () => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Theme theme={theme} toggleTheme={toggleTheme} />
          <button onClick={() => setDisplayList(!displayList)}>
            Toggle list view
          </button>
          <ListProvider>
            {displayList && <List />}
            {!displayList && "Masked list"}
          </ListProvider>
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
    ),
    [theme, displayList]
  );
}

export default App;
