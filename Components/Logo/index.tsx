import { DiamondSharp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <Box
        color="secondary.contrastText"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <DiamondSharp />
        <Typography variant="h6" component="div" align="center">
          Earthbnb
        </Typography>
      </Box>
    </Link>
  );
};

export default Logo;
