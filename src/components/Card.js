import React from "react";

function Card(props) {
  return (
    <div key={props.id} className="card">
      <div className="card_imageContainer">
        <img className="card_image" src={props.img} />
      </div>
      <div className="card_details">
        <h2 className="card_detailsTile">{props.name}</h2>
      </div>
    </div>
  );
}

export default Card;
