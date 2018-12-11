import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Cards from "./CardContent/Cards";
import Pagination from "./Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import { API_KEY, API_URL, img_URL, img_Poster_Size } from "../../config";
import "./Content.css";

class Content extends Component {
  state = {
    movieArr: [],
    pagesNow: 0,
    totalPages: 0,
    searchVal: "",
    price: "",
    buttonNav: "",
    loading: false
  };

  //LifeCycle Method pada saat component di load
  componentDidMount() {
    this.setState({ loading: true });
    const url = `${API_URL}movie/popular?api_key=${API_KEY}&language=id-ID&region=ID&page=1`;
    this.fetchMovie(url);
  }

  //Method Navigasi Tombol pada Pagination
  itemNavigation = () => {
    let url = "";
    this.setState({ loading: true });

    if (this.state.ButtonNav === "Next") {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=id-ID&region=ID&page=${this
        .state.pagesNow + 1}`;
    } else if (this.state.ButtonNav === "Back") {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=id-ID&region=ID&page=${this
        .state.pagesNow - 1}`;
    } else if (this.state.searchVal !== "" && this.state.ButtonNav === "Next") {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=id-ID&region=ID&query=${
        this.state.searchVal
      }&page${this.state.pagesNow + 1}`;
    } else if (this.state.searchVal !== "" && this.state.ButtonNav === "Back") {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=id-ID&region=ID&query=${
        this.state.searchVal
      }&page${this.state.pagesNow - 1}`;
    }
    this.fetchMovie(url);
  };

  //Method mencari Movie
  search = searchVal => {
    console.log(searchVal);
    let url = "";
    this.setState({
      movieArr: [],
      searchVal,
      loading: true
    });

    if (searchVal == "") {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=id-ID&region=ID&page=1`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=id-ID&region=ID&page=1`;
    }

    this.fetchMovie(url);
  };

  //Method mengambil data .json dari moviedb API
  fetchMovie = url => {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        this.setState({
          movieArr: [result.results],
          pagesNow: result.page,
          totalPages: result.total_pages,
          loading: false
        });
      });
  };

  render() {
    return (
      <div>
        <Navigation callback={this.search} />
        <Cards />
        <Pagination />
        <Footer />
        <Spinner />
      </div>
    );
  }
}

export default Content;
