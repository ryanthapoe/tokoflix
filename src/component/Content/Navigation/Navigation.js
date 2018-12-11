import React, { Component } from "react";
import Search from "./Search/Search";
import Usermenu from "./Usermenu/Usermenu";
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Usermenu />
        Tokoflix
        <Search />
      </div>
    );
  }
}
export default Navigation;
