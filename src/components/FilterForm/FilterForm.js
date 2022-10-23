import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const FilterForm = ({ setRadioButton }) => {
  return (
    <FormControl>
      <FormLabel>Filter</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={(event) => {
          setRadioButton(event.target.value);
        }}
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value={true} control={<Radio />} label="Todo" />
        <FormControlLabel value={false} control={<Radio />} label="Done" />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterForm;
