import React, { Component } from "react";
import Card from "./CardContent/Card";
import Pagination from "./Pagination/Pagination";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div>
        <Card />
        Bagian Content
        <Pagination />
      </div>
    );
  }
}

export default Content;
