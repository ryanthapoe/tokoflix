import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { convertMoney } from "../../../helper";

const Card = props => {
  //Menentukan harga Film berdasarkan Rating
  let harga;
  if (props.moviePrice <= 3) {
    harga = 3500;
  } else if (props.moviePrice <= 6) {
    harga = 8250;
  } else if (props.moviePrice <= 8) {
    harga = 16350;
  } else if (props.moviePrice <= 10) {
    harga = 21250;
  } else {
    harga = null;
  }
  const hargaRupiah = convertMoney(harga);

  //Membuat slug dari Nama Film yg udah di fetch dari API untuk ke URL
  const slug = props.movieName
    .toLowerCase()
    .replace(/\s+/g, "-") //replace space with -
    .replace(/[^\w-]+/g, "") //remove all non-word chars
    .replace(/--+/g, "-") //replace multiple - with single -
    .replace(/^-+/, "")
    .replace(/-+$/, "");

  return (
    <div className="card mb-3">
      <h5 className="card-header">{props.movieName}</h5>
      <img className="custom" src={props.image} alt={props.titleAlt} />
      <div className="card-body">
        <p className="card-text float-right">Harga: {hargaRupiah}</p>
      </div>
      <div className="card-footer text-muted">
        <Link to={`/:${props.movieID}-${slug}`}>
          <p className="btn btn-secondary">Lihat Detail</p>
        </Link>
        <p className="btn btn-primary float-right">Beli</p>
      </div>
    </div>
  );
};
export default Card;
