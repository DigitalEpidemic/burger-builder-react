import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    {/* <p className={classes.totalPrice}> */}
    <p className={classes.ControlTitle}>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {/* </p> */}
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
        ingredientCount={props.ingredients[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>
      {props.isAuth ? "CHECKOUT" : "SIGN UP TO ORDER"}
    </button>
  </div>
);

export default buildControls;
