import React, { useState } from 'react';
import './Style/index.scss'
import Routes from "./Routes";

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <Routes />
      </div>
    </div>
  );
}

export default App;
