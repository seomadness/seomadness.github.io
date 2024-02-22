import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function AccountManagement() {
  return (
    <Grid
      container
      spacing={1}
      id="account-management"
      sx={{ my: { xs: 1, sm: 2 } }}
    >
      <Stack spacing={3} direction={"column"}>
        <Typography variant="h4">Account Management Services</Typography>
        <Typography variant="body2">
          Client: Department of Defense, Air Force - Kobayashi Maru Kobayashi
          <br />
          Maru was awarded the Department of Defense, 2020 Software Innovation
          Team.
        </Typography>
        <Stack spacing={0.5} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Background
          </Typography>
          <Typography variant="body1" color="text.primary">
            As Kobayashi Maru, Section 31 is growing at a rapid pace, product
            teams are losing consistency to provide our expanding user groups
            access to their products. I am leading design in a team responsible
            for streamlining Section 31 suite of products and how we can better
            support the account creaton process for warfighters worldwide.
          </Typography>
        </Stack>

        <Stack spacing={0.5} direction={"column"}>
          <Typography variant="h6" color="text.secondary">
            Responsibilities
          </Typography>
          <Typography variant="body1" color="text.primary">
            Collaborated with internal developers and products managers to
            define an agile software development roadmap and gathered technical
            requirements to mitigate risks on feasibility.
          </Typography>
          <Typography variant="body1" color="text.primary">
            Communicated product visions with stakeholders and enterprise
            administrators to ensure designed solutions are sustainable for
            continuous deployment on cloud.
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
}
