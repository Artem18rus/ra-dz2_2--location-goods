import React, { useState } from "react";
import products from "../other/products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store() {
  let [icon, setIcon] = useState("view_list");
  // let [cards, setCards] = useState(products);

  let cards = products;
  let item = products;

  const onSwitch = (e) => {
    let buttonStatus;
    // e === "view_list"
    //   ? (buttonStatus = "view_module")
    //   : (buttonStatus = "view_list");
    // let iconState = document.querySelector('.material-icons');
    // console.log(iconState)
    if (e === "view_list") {
      buttonStatus = "view_module";
    } else {
      buttonStatus = "view_list";
    }

    setIcon(buttonStatus);
    icon = buttonStatus;
  };

  return (
    <div className="app-products">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      <CardsView cards={cards} />
      <ListView item={item} />
    </div>
  );
}

export default Store;
