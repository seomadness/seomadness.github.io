import * as React from "react";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Copyright © "}
      <MuiLink color="inherit" href="https://seomadness.github.io">
        seomadness.github.io
      </MuiLink>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

function MadeWith() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {"Made with love using "}
      <Typography component={"span"} variant="body2" color="text.primary">
        Next.js and React
      </Typography>
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        textAlign: { sm: "center", md: "left" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Copyright />
        <MadeWith />
      </Box>
    </Container>
  );
}
