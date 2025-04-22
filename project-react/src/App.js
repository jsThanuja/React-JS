import React, { components} from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';

class App extends components {
  render() {
    return (
      <div className='App'>
        <Greet/>
      </div>
    )
  }
}

export default App;
