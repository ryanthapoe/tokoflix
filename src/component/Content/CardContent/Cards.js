import React from "react";

const Cards = props => {
  const renderCard = () => {
    const colCard = props.children.map((element, i) => {
      return (
        <div key={i} className="col-lg-3">
          {element}
        </div>
      );
    });
    return colCard;
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      </div>
      {renderCard()}
    </div>
  );
};
export default Cards;
