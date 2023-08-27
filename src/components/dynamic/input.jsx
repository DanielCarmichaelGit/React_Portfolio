import React from "react";
import { TextField} from "@mui/material";
import DateSelector from '../static/dateSelector';

const InputField = ({ label, type, handleChange, values, queryValue }) => {
  if (type !== "date") {
    return (
      <TextField
        fullWidth
        name={queryValue}
        id="filled-basic"
        placeholder={values[`${queryValue}`]}
        defaultValue={values[`${queryValue}`]}
        label={label}
        variant="standard"
        margin="normal"
        multiline={type === "multiline" ? true : false}
        minRows={4}
        color="info"
        size="large"
        key={queryValue}
        onChange={handleChange}
        focused
      />
    );
  }
  else {
    return (
        <DateSelector
            handleChange={handleChange}
            values={values}
        />
    )
  }
};

export default InputField;
