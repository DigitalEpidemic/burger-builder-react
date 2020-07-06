import React from "react";
import UIImage from "../../../assets/images/UI_Meat.png";
import classes from "./ControlImage.module.css";

const meatImage = (props) => (
  <div className={props.inactive ? classes.ControlImageDisabled : classes.ControlImage}>
    <img src={UIImage} alt="Meat" />
  </div>
);

export default meatImage;
