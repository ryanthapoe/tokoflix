import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Card from "./CardContent/Card";
import Cards from "./CardContent/Cards";
import Pagination from "react-js-pagination";
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

  //Method mencari Movie
  search = searchVal => {
    let url = "";
    this.setState({
      movieArr: [],
      searchVal,
      loading: true
    });
    if (searchVal == "") {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=id-ID&region=ID&page=1`;
    } else {
      url = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchVal}&language=id-ID&region=ID&page=1`;
    }
    this.fetchMovie(url);
  };

  //Fucntion untuk pagination
  handlePageChange = pageNumber => {
    let url = "";
    this.setState({ pagesNow: pageNumber, loading: true, movieArr: [] });
    if (this.state.searchVal !== "") {
      url = `${API_URL}search/movie?api_key=${API_KEY}&language=id-ID&region=ID&query=${
        this.state.searchVal
      }&page=${this.state.pagesNow}`;
    } else {
      url = `${API_URL}movie/popular?api_key=${API_KEY}&language=id-ID&region=ID&page=${pageNumber}`;
    }
    this.fetchMovie(url);
  };

  //Method mengambil data .json dari moviedb API
  fetchMovie = url => {
    fetch(url)
      .then(result => result.json())
      .then(result => {
        console.log(result);
        this.setState({
          movieArr: [...this.state.movieArr, ...result.results],
          pagesNow: result.page,
          totalPages: result.total_pages,
          loading: false
        });
      });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <Navigation callback={this.search} />
        <div className="container mt-5">
          <Cards
            header={this.state.searchVal ? "Hasil Pencarian" : "Film Populer"}
            loading={this.state.loading}
          >
            {this.state.movieArr.map((element, i) => {
              return (
                <Card
                  key={i}
                  image={
                    element.poster_path
                      ? `${img_URL}${img_Poster_Size}${element.poster_path}`
                      : "./image/noimage.jpg"
                  }
                  movieID={element.id}
                  movieName={element.original_title}
                />
              );
            })}
          </Cards>
        </div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <div>
            <div className="customContent">
              <Pagination
                hideDisabled
                itemClass="page-item"
                linkClass="page-link"
                activePage={this.state.pagesNow}
                itemsCountPerPage={20}
                totalItemsCount={this.state.totalPages}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
              />
            </div>

            <Footer />
          </div>
        )}
      </div>
    );
  }
}

export default Content;
