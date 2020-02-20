import React from 'react';
import './App.css';
import Home from "./components/home/Home";

function App() {
    const state = {
        showTopMenu: false
    }
  return (
    <div className="App">
      <Home showMenu={state.showTopMenu}></Home>
    </div>
  );
}

export default App;
