import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    marginLeft: 20,
    minWidth: 120,
  },
});

const Dropdown = props => {
  const { classes } = props;
  return (
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="age-simple">{props.name}</InputLabel>
      <Select
        disabled={props.disabled}
        value={props.value}
        onChange={props.handleChange}
        inputProps={{
          name: props.name,
          id: props.id
        }}
      >
        {props.items.map(i => {
          return (
            <MenuItem key={i.id} value={i.name}>
              {i.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default withStyles(styles)(Dropdown);
