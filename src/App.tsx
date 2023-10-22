import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <Home/>
      </div>
      Hello Ecommerce
    </div>
  );
}

export default App;
