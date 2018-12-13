import React from "react";
import "./Jumbotron.css";
import { convertMoney, hargaCalc } from "../../../helper";
import {
  API_KEY,
  img_URL,
  img_Backdrop_Size,
  img_Poster_Size
} from "../../../config";
import "./Jumbotron.css";

const Jumbotron = props => {
  const harga = hargaCalc(props.movie.vote_average);
  const hargaRupiah = convertMoney(harga);
  return (
    <div
      className="cover-container d-flex h-100 p-3 mx-auto flex-column"
      style={{
        background: props.movie.backdrop_path
          ? `url('${img_URL}${img_Backdrop_Size}${props.movie.backdrop_path}')`
          : "#f3f3f3"
      }}
    >
      <div className="card flex-md-row mb-4 box-shadow h-md-250">
        <div className="card-body d-flex flex-column align-items-start">
          <p className="d-inline-block mb-2 text-success">Genre :</p>

          {props.movie.genres.map((element, i) => {
            return (
              <p key={i} className="d-inline-block mb-2 text-success">
                {element.name}
              </p>
            );
          })}
          <h1 className="mb-0">{props.movie.original_title}</h1>
          <div className="mb-1 text-muted">{props.movie.release_date}</div>
          <h4 classname="card-text mb-auto">PLOT</h4>
          <p className="card-text">{props.movie.overview}</p>
          <h4 classname="card-text mb-auto">Rating</h4>
          <p className="card-text">{props.movie.vote_average}</p>
          {props.director.length > 1 ? (
            <h4 classname="card-text mb-auto">Directors</h4>
          ) : (
            <h4 classname="card-text mb-auto">Director</h4>
          )}
          {props.director.map((element, i) => {
            return <p className="card-text">{element.name}</p>;
          })}
          <h4 classname="card-text mb-auto">Harga</h4>
          <p className="card-text">{hargaRupiah}</p>
          <p className="btn btn-primary">Beli</p>
        </div>
        <img
          className="card-img-right flex-auto d-none d-md-block"
          src={`${img_URL}${img_Poster_Size}${props.movie.poster_path}`}
          alt={props.movie.title}
        />
      </div>
    </div>
  );
};
export default Jumbotron;
