import React from "react";
import UIImage from "../../../assets/images/UI_Bacon.png";
import classes from "./ControlImage.module.css";

const baconImage = (props) => (
  <div className={props.inactive ? classes.ControlImageDisabled : classes.ControlImage}>
    <img src={UIImage} alt="Bacon" />
  </div>
);

export default baconImage;
