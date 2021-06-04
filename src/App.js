import './App.css';
import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';


class App extends React.Component {
  
  render() {
    return (
      <div className="App">
    
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/hobbies">
              <Hobbies />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
  
}

export default App;
