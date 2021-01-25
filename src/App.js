import React from 'react';
import classes from './App.module.css';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className={classes.App}>
      <h1>Hello World</h1>
      <Navbar />
    </div>
  );
}

export default App;
