import { Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import { useContext } from "react";
import { QueryContext } from "../../pages/_app";
import SearchButton from "./Button";
import FormInputs from "./Inputs";

const Form = () => {
  const router = useRouter();
  const query = useContext(QueryContext);
  return (
    <Paper
      sx={{
        paddingX: "2rem",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        marginY: "2rem",
        maxWidth: "sm",
      }}
    >
      <Grid container spacing={2} padding={2}>
        <FormInputs />
        <Grid item xs={12} md={12} textAlign="center" justifyContent="center">
          <SearchButton />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Form;
