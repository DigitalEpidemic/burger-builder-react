import React from "react";
import UIImage from "../../../assets/images/UI_Cheese.png";
import classes from "./ControlImage.module.css";

const cheeseImage = (props) => (
  <div className={props.inactive ? classes.ControlImageDisabled : classes.ControlImage}>
    <img src={UIImage} alt="Cheese" />
  </div>
);

export default cheeseImage;
