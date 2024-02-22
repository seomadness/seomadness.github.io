import * as React from "react";
import AccountManagement from "./AccountManagement";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function PortfolioDetails({
  index,
}: {
  index: number | undefined;
}) {
  if (index)
    return (
      <Container
        id="portfolio-details"
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          my: { xs: 4, sm: 6 },
          zIndex: 99,
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            textAlign: "left",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { md: "center" },
            p: 1.5,
            gap: 1,
          }}
        >
          {index === 3 && <AccountManagement />}
        </Box>
      </Container>
    );
  else return;
}
