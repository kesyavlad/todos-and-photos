import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const FilterForm = () => {
  return (
    <FormControl>
      <FormLabel>Filter</FormLabel>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
        <FormControlLabel value="" control={<Radio />} label="Done" />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterForm;
