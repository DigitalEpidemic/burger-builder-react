import React from "react";
import burgerLogo from "../../assets/images/byob.png";
import classes from "./Byob.module.css";

const byob = (props) => (
  <div className={classes.Byob} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Bring your own burger" />
  </div>
);

export default byob;
