import React, { useState } from "react";
import products from "../other/products";
import IconSwitch from "./IconSwitch";
import CardsView from "./CardsView";
import ListView from "./ListView";

function Store() {
  let [icon, setIcon] = useState("view_list");
  const onSwitch = (e) => {
    setIcon(icon === "view_list" ? "view_module" : "view_list");
  };

  return (
    <div className="app-products">
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon === "view_list" ? (
        <CardsView cards={products} />
      ) : (
        <ListView item={products} />
      )}
    </div>
  );
}

export default Store;
