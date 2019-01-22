import React from "react";
import { Paper } from "@material-ui/core";

const Price = props => {
    var date = new Date(props.date)
  return (
    <Paper>
      {date.toLocaleDateString()} price : {props.price}€ suggested price :{" "}
      {props.suggestedPrice}€ Validated : {props.validated?"Y":"N"}
    </Paper>
  );
};
export default Price;
