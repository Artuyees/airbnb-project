import { Box, Grid, TextField } from "@mui/material";
import React from "react";

const Form = () => {
  return (
    <form
      onSubmit={async (event: React.SyntheticEvent) => {
        event.preventDefault();
        const target = event.target as HTMLFormElement & {
          email: HTMLInputElement;
          name: HTMLInputElement;
        };
        console.log("dzialas", target.name.value, target.email.value);
      }}
    >
      <label htmlFor="name">Name</label>
      <input id="name" name="name" type="text" autoComplete="name" required />
      <input
        id="email"
        name="email"
        type="text"
        autoComplete="email"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
