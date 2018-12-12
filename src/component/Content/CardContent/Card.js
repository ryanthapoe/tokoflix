import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="card mb-3">
      <h5 className="card-header">{props.movieName}</h5>
      <img className="custom" src={props.image} alt="Card image" />
      <div className="card-body">
        <p className="card-text">Harga: </p>
      </div>

      <div className="card-footer text-muted">
        {" "}
        <a href="#" className="btn btn-secondary">
          Lihat Detail
        </a>
        <a href="#" className="btn btn-primary float-right">
          Beli
        </a>
      </div>
    </div>
  );
};
export default Card;
