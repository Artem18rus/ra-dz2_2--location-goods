import React, { useState } from "react";
import products from "../other/products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store() {
  let [icon, setIcon] = useState("view_list");

  let cards = products;
  let item = products;

  const onSwitch = (e) => {
    let buttonStatus;

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
      <CardsView cards={icon === "view_list" ? cards : null} />
      <ListView item={icon === "view_module" ? item : null} />
    </div>
  );
}

export default Store;
