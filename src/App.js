import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import HamburgerMenu from 'react-hamburger-menu'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      menuOpen: false,
      scrolledToRight: false

    };

    this.menuClicked = this.menuClicked.bind(this)
  }
  moveScreenLeft(){
    this.setState({scrolledToRight: false})
  }

  moveScreenRight(){
    this.setState({scrolledToRight: true})
  }

  menuClicked(){
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    let { menuOpen, scrolledToRight } = this.state;
    return (
      <div className="App">
        <div className="panels" id="panelslider"
          style={{marginLeft: scrolledToRight ? "-100%" :"0%", width: "200.5vw", position: "absolute",
            background: "#e5f4f9", overflow: "scroll"}}>

          <div className="panel" id="products" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-products-thin-1.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden", display: "flex"}}>

             <div class="copybox" style={{color: "white", margin: "auto", maxWidth: "90%"}}>
               <h2>Products</h2>
               <div class="text" style={{color: "inherit"}}>
                 <p>We create standout projects that deliver as promised.</p>
              </div>
              <div class="additional_text ">Dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio. Dynamicus qui sequitur mutationem consuetudium lectorum mirum est notare! Minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis. Luptatum zzril delenit augue duis dolore te feugait nulla? Quarta decima et quinta decima eodem modo, typi qui nunc nobis.
              </div>
            </div>

           </div>

          <div className="panel" id="markets" style={{backgroundImage: "url('https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-markets-thin-2.jpg')", borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden", display: "flex"}}>

             <div class="copybox" style={{color: "black", height: "50vh", margin: "60vh auto auto auto"}}>
               <h2>Markets</h2>
               <div class="text">
                 <p>We team with clients of every size and market to achieve their vision.</p>
              </div>
              <div class="additional_text ">Praesent luptatum zzril delenit augue duis dolore te feugait nulla! Esse molestie consequat vel illum dolore eu feugiat nulla facilisis at vero eros et. Autem vel eum iriure dolor in hendrerit in vulputate velit. Humanitatis per seacula quarta decima et quinta decima, eodem modo typi qui nunc nobis videntur parum! Lobortis nisl ut aliquip ex ea commodo consequat duis accumsan et iusto odio dignissim qui blandit!
              </div>
            </div>

           </div>

          <div className="panel" id="services" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-services-thin.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden", display: "flex"}}>

             <div class="copybox" style={{color: "white", margin: "auto", maxWidth: "90%"}}>
               <h2>Services</h2>
               <div class="text" style={{color: "inherit"}}>
                 <p>Print, digital and marketing services with accomplished quality.</p>
              </div>
              <div class="additional_text ">Id quod mazim placerat facer possim assum typi non habent claritatem insitam est usus legentis in. Lectorum mirum est notare quam littera gothica quam nunc putamus parum.
              </div>
            </div>

           </div>

          <div className="panel" id="about-2" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-about-thin.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden", display: "flex" }}>

             <div class="copybox" style={{color: "white", margin: "15vh auto auto auto", maxWidth: "90%"}}>
               <h2>About</h2>
               <div class="text" style={{color: "inherit"}}>
                 <p>At Calitho, we take your imagination and run with it. From our obsessive focus on quality to our zealous approach to customer service, we go all out to make every project shine. You dream it. We make it happen.</p>
              </div>
              <div class="additional_text ">
              </div>
            </div>

           </div>

          <div className="panel" id="pressroom" style={{backgroundImage: `url("https://calitho.brick.agency/wp-content/uploads/sites/40/2018/11/feature-image-press-thin.jpg")`, borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden", display: "flex"}}>

             <div class="copybox" style={{color: "white", margin: "15vh auto auto auto", maxWidth: "90%"}}>
               <h2>Pressroom</h2>
               <div class="text" style={{color: "inherit"}}>
                 <p>Claritatem insitam est usus legentis in, iis qui facit eorum claritatem.</p>
              </div>
              <div class="additional_text ">Dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio. Dynamicus qui sequitur mutationem consuetudium lectorum mirum est notare! Minim veniam quis nostrud exerci tation ullamcorper suscipit lobortis. Luptatum zzril delenit augue duis dolore te feugait nulla? Quarta decima et quinta decima eodem modo, typi qui nunc nobis.
              </div>
            </div>

           </div>

          <div className="panel" id="contact-2" style={{backgroundImage: "transparent", borderRight: "1px solid black",
             width: "33.3333vw", height: "100vh", overflow: "hidden", display: "flex"}}>

             <div class="copybox" style={{color: "white", margin: "auto", maxWidth: "90%"}}>
               <h2>Contact</h2>
               <div class="text" style={{color: "inherit"}}>
                 <p></p>
              </div>
              <div class="additional_text ">
              </div>
            </div>

           </div>

        </div>
        <a className="logowrap " href="/">
          <img className="logo" src={require("./images/calitho_logo.png")} alt="logo"/>
        </a>

        <div class="menu" style={{position: "fixed", zIndex: "2", background: "white",
           width: menuOpen ? "100vw" : "0vw", height: menuOpen ? "100vh" : "0vh", display: "flex",
           transition: "width 1s", right: "0vh"}}>
           <div style={{background: "grey", width: "33.3%", height: "100%"}}></div>
           <div style={{background: "darkGrey", width: "33.3%", height: "100%"}}></div>
           <div style={{background: "lightGrey", width: "33.3%", height: "100%"}}></div>

         </div>

        <div class="hamburger" style={{position: 'absolute', right: "4vh", top: "3vh", background: "#fff",
           padding: "15px", borderRadius: "100%", width:"25px", height: "25px", display: "flex", alignItems: "center",
            justifyContent: "center", zIndex:"5"}}>
          <HamburgerMenu isOpen={!menuOpen} menuClicked={this.menuClicked} onClick={this.menuClicked}/>
        </div>
        <div class="arrows"></div>

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
