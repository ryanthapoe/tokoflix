import React, { Component } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import Card from "./CardContent/Card";
import Pagination from "./Pagination/Pagination";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Card />
        <Pagination />
        <Footer />
      </div>
    );
  }
}

export default Content;
