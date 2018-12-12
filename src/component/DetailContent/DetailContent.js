import React, { Component } from "react";
import { API_KEY, API_URL } from "../../config";
import Navigation from "../Content/Navigation//Navigation";
import Jumbotron from "./Jumbotron/Jumbotron";
import Actor from "./Actor/Actor";
import Recomendation from "./Recomendation/Recomendation";
import Spinner from "../Spinner/Spinner";
import "./DetailContent.css";

class DetailContent extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Jumbotron />
        <Actor />
        <Recomendation />
        <Spinner />
      </React.Fragment>
    );
  }
}
export default DetailContent;
