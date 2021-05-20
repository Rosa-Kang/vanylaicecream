import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router className="wrapper">
      <Navbar />
      <Switch>
        <Route />
        <Route />
      </Switch>
    </Router>
  );
}


export default App;
