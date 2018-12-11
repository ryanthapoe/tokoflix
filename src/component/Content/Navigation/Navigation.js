import React, { Component } from "react";
import Search from "./Search/Search";
import Usermenu from "./Usermenu/Usermenu";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Usermenu />
            <a href="../" className="navbar-brand">
              Tokoflix
            </a>
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
