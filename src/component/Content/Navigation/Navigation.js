import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import Usermenu from "./Usermenu/Usermenu";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark" id="top">
          <div className="container">
            <Usermenu />
            <Link to="/">
              <h1 className="navbar-brand">Tokoflix</h1>
            </Link>
            <div className="nav navbar-nav ml-auto">
              <Search callback={this.props.callback} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
