import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Content from "../Content/Content";
import Nopage from "../NoPage/Nopage";
import DetailContent from "../DetailContent/DetailContent";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={Content} exact />
            <Route path="/:movieId&:slug" component={DetailContent} exact />
            <Route component={Nopage} exact />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
