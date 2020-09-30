import React from "react";
import Aux from "../../../hoc/Aus";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious Burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout</p>
      <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
    </Aux>
  );
};

export default OrderSummary;
