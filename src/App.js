import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import React, { useState } from 'react';
import Switch from './components/Swich';




function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch />  
      </BrowserRouter>
    </div>
  );
}

export default App;
