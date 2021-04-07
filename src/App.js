import logo from './logo.svg';
import './App.css';
import React from 'react';
import MyClock from './MyClock';

class App extends React.Component {
  render() {
    return (
      <div>
        <MyClock text="시계 1번" color="RED"/>
        <MyClock text="시계 2번" color="ORANGE"/>
        <MyClock text="시계 3번" color="YELLOW"/>
        <MyClock text="시계 4번" color="GREEN"/>
        <MyClock text="시계 5번" color="BLUE"/>
      </div>
    )
  }
}

export default App;
