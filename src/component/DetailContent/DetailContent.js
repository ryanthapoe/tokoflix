import React, { Component } from "react";
import { API_KEY, API_URL } from "../../config";
import Navigation from "../Content/Navigation//Navigation";
import Jumbotron from "./Jumbotron/Jumbotron";
import Actor from "./Actor/Actor";
import Recomendation from "./Recomendation/Recomendation";
import Spinner from "../Spinner/Spinner";
import "./DetailContent.css";

class DetailContent extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    //Fetching Movie
    const url = `${API_URL}movie/${
      this.props.match.params.movieId
    }?api_key=${API_KEY}&languange=id-ID&country=ID`;
    this.fetchItems(url);
  }

  fetchItems = url => {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: result }, () => {
            //Fetch Actor
            const url = `${API_URL}movie/${
              this.props.match.params.movieId
            }/credits?api_key=${API_KEY}`;
            fetch(url)
              .then(result => result.json())
              .then(result => {
                const directors = result.crew.filter(
                  member => member.job === "Director"
                );

                this.setState({
                  actors: result.cast,
                  loading: false,
                  directors
                });
              });
          });
        }
      })
      .catch(error => console.log("Error : ", error));
  };

  render() {
    return (
      <div>
        <Navigation />
        {this.state.movie ? (
          <div>
            <Jumbotron
              movie={this.state.movie}
              director={this.state.directors}
            />
          </div>
        ) : null}
        {/* <Actor />
        <Recomendation />
        <Spinner /> */}
      </div>
    );
  }
}
export default DetailContent;
