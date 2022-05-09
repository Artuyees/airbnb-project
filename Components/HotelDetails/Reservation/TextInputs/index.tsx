import { TextField } from "@mui/material";
import React from "react";

type Props = {
  label: string;
  defaultvalue?: string;
};
const TextInput = (props: Props) => {
  return (
    <TextField
      fullWidth
      id="outlined-required"
      label={props.label}
      defaultValue={props.defaultvalue ? props.defaultvalue : ""}
    />
  );
};

export default TextInput;
