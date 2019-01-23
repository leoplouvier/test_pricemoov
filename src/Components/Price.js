import React from "react";
import { Paper, withStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  paper: {
    padding: "8px 10px",
    minWidth: 500,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5
  },
  spaceLeft: {
    marginLeft: 6
  }
});
const Price = props => {
  const { classes } = props;
  var date = new Date(props.date);
  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom color="primary">
        {date.toLocaleDateString() + " |"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.spaceLeft}>
        price :
      </Typography>
      <Typography variant="h6" gutterBottom color="secondary">
        {props.price + " €"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.spaceLeft}>
        suggested price :
      </Typography>
      <Typography variant="h6" gutterBottom color="secondary">
        {props.suggestedPrice + " €"}
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={classes.spaceLeft}>
        Validated :
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        color={props.validated ? "primary" : "secondary"}
      >
        {props.validated ? " Y" : " N"}
      </Typography>
    </Paper>
  );
};
export default withStyles(styles)(Price);
