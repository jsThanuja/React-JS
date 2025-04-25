import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome.js'
import Hello from  './components/Hello'
import Message from './components/Message.js'
import Counter from './components/Counter.js';
import FuctionClick from './components/FuctionClick.js';
import ClassClick from './components/ClassClick.js';
import EventBind from './components/EventBind.js';
import EventStateBind from './components/EventStateBind.js';
import FuctionHook from './components/FuncionHook.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FuctionHook/>
    {/* <EventStateBind/>
         <EventBind/>
       <FuctionClick/>
       <ClassClick />
      
         <Counter/>
        <Message/> 
      <Greet name="thanu" heroName = "Thanuja"> 
      <p> This is My Name </p>
      </Greet>
      <Greet name="chinni" heroName = "Rakshitha">
      <button> Action</button>
      </Greet>
      <Welcome name="thanu" heroName = "Thanuja" />
      <Welcome name="chinni" heroName = "Rakshitha" />  
    {/* <Hello /> */}
     
      </div>
    );
  }
}

export default App;
