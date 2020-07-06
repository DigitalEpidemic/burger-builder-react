import React, { Component } from "react";
import classes from "./BuildControl.module.css";
import CheeseImage from "../../../Layout/ControlImage/CheeseImage";
import MeatImage from "../../../Layout/ControlImage/MeatImage";
import SaladImage from "../../../Layout/ControlImage/SaladImage";
import BaconImage from "../../../Layout/ControlImage/BaconImage";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BuildControl extends Component {
  render() {
    let picture = null;
    let ingredientPrice = null;

    switch (this.props.label) {
      case "Meat":
        picture = <MeatImage inactive={this.props.disabled} />;
        ingredientPrice = INGREDIENT_PRICES["meat"];
        break;
      case "Cheese":
        picture = <CheeseImage inactive={this.props.disabled} />;
        ingredientPrice = INGREDIENT_PRICES["cheese"];
        break;
      case "Lettuce":
        picture = <SaladImage inactive={this.props.disabled} />;
        ingredientPrice = INGREDIENT_PRICES["salad"];
        break;
      case "Bacon":
        picture = <BaconImage inactive={this.props.disabled} />;
        ingredientPrice = INGREDIENT_PRICES["bacon"];
        break;
      default:
        picture = null;
    }

    return (
      <div className={classes.BuildControl}>
        {picture}
        <div className={classes.Label}>
          {this.props.label}
          <br />
          <span className={classes.ControlPrice}>{ingredientPrice} </span>
        </div>
        <button className={classes.Less} onClick={this.props.removed} disabled={this.props.disabled}>
          -
        </button>
        <p className={classes.Counter}>{this.props.ingredientCount}</p>
        <button className={classes.More} onClick={this.props.added}>
          +
        </button>
      </div>
    );
  }
}

// const buildControl = (props) => (
//     <div className={classes.BuildControl}>
//         <div className={classes.Label}>{props.label}</div>
//         <button className={classes.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
//         <button className={classes.More} onClick={props.added}>More</button>
//     </div>
// );

export default BuildControl;
