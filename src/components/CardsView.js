import React from "react";

function CardsView(props) {
  return (
    <ul className="cardsView">
      {props.cards.map((elem, idx) => (
        <li className="shopCard" key={idx}>
          <img src={elem.img} alt="shopCard" />
          <div className="name-card">{elem.name}</div>
          <div className="color-card">{elem.color}</div>
          <div className="price_btn-card">
            <div className="price-card">${elem.price}</div>
            <div className="add_btn-card">add to cart</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CardsView;
