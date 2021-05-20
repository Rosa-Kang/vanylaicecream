import React from 'react';
import './App.css';
import Navbar from './components/Nav/Navbar';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Services from './Pages/Services';
import SignUp from './Pages/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router className="wrapper">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
    </Router>
  );
}


export default App;
