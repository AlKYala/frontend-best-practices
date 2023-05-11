import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchData from './stuff/apiCalls';

function App() {

  const fetchDataFunction = fetchData;

  const [data, setData] = useState(null);

  useEffect(() => {
    //fetchDataFunction().then(response => setData(response)).finally(() => console.log(data));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
