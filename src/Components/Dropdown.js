import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const Dropdown = props => {
    console.log(typeof(props.items))
    return (
    <Select
      value={props.value}
      placeholder="choose"
      onChange={props.handleChange}
      inputProps={{
        name: props.name,
        id: props.id,
      }}
    >
      {props.items.map(i => {return <MenuItem key={i.id} value={i.name}>{i.name}</MenuItem>})}
    </Select>
    )
}
export default Dropdown;