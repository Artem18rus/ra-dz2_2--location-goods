import React from "react";

function ListView(props) {
  return (
    <ul className="listView">
      {props.item
        ? props.item.map((el, idx) => (
            <li className="shopItem" key={idx}>
              <img src={el.img} alt="shopItem" />
              <div className="name-view">{el.name}</div>
              <div className="color-view">{el.color}</div>
              <div className="price-view">${el.price}</div>
              <div className="add_btn-view">Add to cart</div>
            </li>
          ))
        : null}
    </ul>
  );
}

export default ListView;
