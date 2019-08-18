import React from "react";
import "./_Backdrop.scss";
const backDrop = props =>
  props.show ? <div className="Backdrop" onClick={props.clicked} /> : "";

export default backDrop;
