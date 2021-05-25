import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Learning how to use Amazon Amplify
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Not Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
