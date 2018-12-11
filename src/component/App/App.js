import React, { Component } from "react";
import "./App.css";
import Navigation from "../Navigation/Navigation";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
