import { DiamondSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
      <DiamondSharp color="secondary" />
      <Typography variant="h6" color="secondary" component="div">
        {" "}
        Earthbnb
      </Typography>
    </Box>
  );
};

export default Logo;
