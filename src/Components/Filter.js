import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Filter = props => {
  return (
    <FormControl component="fieldset" style={{marginTop: 10}}>
          <FormLabel component="legend">{props.legend}</FormLabel>
          <RadioGroup
            aria-label={props.legend}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
            style={{display: "flex", flexDirection:"row"}}
          >
          {props.labels.map(l=> <FormControlLabel key ={l} value={l} control={<Radio />} label={l} />)}
          </RadioGroup>
        </FormControl>
  );
};
export default Filter;

