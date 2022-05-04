import { DiamondSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <DiamondSharp color="secondary" />
      <Typography variant="h6" color="secondary" component="div" align="center">
        Earthbnb
      </Typography>
    </Box>
  );
};

export default Logo;
