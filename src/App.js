import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="panels" id="panelslider"
          style={{marginLeft: "0%", width: "200vw", position: "absolute",
            background: "#e5f4f9", overflow: "scroll"}}>
          <div className="panel" id="products" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-products-thin-1.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden"}}>
           </div>

          <div className="panel" id="markets" style={{backgroundImage: "url('https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-markets-thin-2.jpg')", borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden"}}>
           </div>

          <div className="panel" id="services" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-services-thin.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden"}}>
           </div>

          <div className="panel" id="about-2" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-about-thin.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden"}}>
           </div>

          <div className="panel" id="pressroom" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-press-thin.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden"}}>
           </div>

          <div className="panel" id="contact-2" style={{backgroundImage: "transparent", borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden"}}>
           </div>

        </div>
        <a className="logowrap " href="/">
          <img className="logo" src={require("./images/calitho_logo.png")} alt="logo"/>
        </a>

      </div>
    );
  }
}

export default App;


// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-products-thin-1.jpg
// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-products-fat-1.jpg

//https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-markets-fat.jpg
//https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-markets-thin-2.jpg

// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-services-thin.jpg
// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-services-fat.jpg
//
// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-about-thin.jpg
// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-about-fat.jpg
//
// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-press-thin.jpg
// https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-press-fat.jpg


//`url(require('./images/products-img-thin.jpg'))`
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
