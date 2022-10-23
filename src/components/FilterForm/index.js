import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const FilterForm = ({ radioButton, setRadioButton }) => {
  const onChange = (event) => {
    setRadioButton(event.target.value);
  };
  return (
    <FormControl>
      <FormLabel>Filter</FormLabel>
      <RadioGroup
        value={radioButton}
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={onChange}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value={true} control={<Radio />} label="Todo" />
        <FormControlLabel value={false} control={<Radio />} label="Done" />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterForm;
