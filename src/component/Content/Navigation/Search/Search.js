import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = {
    value: ""
  };

  //Deklarasi timeout untuk mengatur datangnya hasil pencarian
  timeout = null;

  handleSearch = e => {
    this.setState({ value: e.target.value });
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 1000);
  };
  render() {
    return (
      <div className="form-inline my-2 my-lg-0">
        <input
          type="text"
          className="form-control mr-sm-2"
          placeholder="Cari Movie"
          value={this.state.value}
          onChange={this.handleSearch}
        />
        {/* <span>
          <button disabled>
            <span className="glyphicon glyphicon-search" />
          </button>
        </span> */}
      </div>
    );
  }
}

export default Search;
