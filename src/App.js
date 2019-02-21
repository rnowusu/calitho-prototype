import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="panels" id="panelslider"
          style={{marginLeft: "0%", width: "200vw", position: "fixed",
            background: "#e5f4f9", overflow: "scroll"}}>
          <div class="panel" id="products" style={{borderRight: "1px solid black", width: "33.3333vw", height: "100vh", overflow: "hidden"}}></div>
          <div class="panel" id="markets" style={{borderRight: "1px solid black", width: "33.3333vw", height: "100vh", overflow: "hidden"}}></div>
          <div class="panel" id="services" style={{borderRight: "1px solid black", width: "33.3333vw", height: "100vh", overflow: "hidden"}}></div>
          <div class="panel" id="about-2" style={{borderRight: "1px solid black", width: "33.3333vw", height: "100vh", overflow: "hidden"}}></div>
          <div class="panel" id="pressroom" style={{borderRight: "1px solid black", width: "33.3333vw", height: "100vh", overflow: "hidden"}}></div>
          <div class="panel" id="contact-2" style={{borderRight: "1px solid black", width: "33.3333vw", height: "100vh", overflow: "hidden"}}></div>
        </div>
        <a class="logowrap " href="/">
          <img class="logo" src="../public/calitho_logo.png" alt="" />
        </a>

      </div>
    );
  }
}

export default App;





//ternary
//if children divs have class of active, active div 100 vw, style={marginLeft: "0%", width: "266.667vw", position: "absolute", overflow: "hidden"}

//   {
//   //   <header className="App-header">
//   //   <img src={logo} className="App-logo" alt="logo" />
//   //   <p>
//   //     Edit <code>src/App.js</code> and save to reload.
//   //   </p>
//   //   <a
//   //     className="App-link"
//   //     href="https://reactjs.org"
//   //     target="_blank"
//   //     rel="noopener noreferrer"
//   //   >
//   //     Learn React
//   //   </a>
//   // </header>
// }
