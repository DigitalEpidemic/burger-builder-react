import React from "react";
import UIImage from "../../../assets/images/UI_Salad.png";
import classes from "./ControlImage.module.css";

const saladImage = (props) => (
  <div className={props.inactive ? classes.ControlImageDisabled : classes.ControlImage}>
    <img src={UIImage} alt="Lettuce" />
  </div>
);

export default saladImage;
