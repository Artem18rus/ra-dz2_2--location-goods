import React from "react";

function IconSwitch(props) {
  return (
    <div className="icon">
      <div
        onClick={(e) => props.onSwitch(e.target.innerText)}
        className="material-icons"
      >
        {props.icon}
      </div>
    </div>
  );
}

export default IconSwitch;
