import * as React from "react";
import { alpha } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AccountManagement from "./AccountManagement";

const projects = [
  {
    title: "Dashboard",
    subheader: "2024 - 2023",
    description: "Hello World",
    image: "",
    content: <></>,
  },
  {
    title: "Device Interaction",
    subheader: "2023",
    description: "Hello World",
    image: "",
    content: <></>,
  },
  {
    title: "Reservation System",
    subheader: "2022",
    description: "Hello World",
    image: "",
    content: <></>,
  },
  {
    title: "Account Management",
    subheader: "2021",
    description: "Hello World",
    image: "",
    content: <AccountManagement />,
  },
];

export default function Portfolio() {
  const [projectIndex, setProjectIndex] = React.useState<number | undefined>(
    undefined
  );

  function handleIndexChange(index: number) {
    setProjectIndex(index);
  }

  const selectedProject = projectIndex ? projects[projectIndex] : undefined;

  return (
    <Container id="portfolio" sx={{ py: { xs: 8, sm: 8 }, zIndex: 99 }}>
      <Grid
        container
        sx={{
          display: {
            xs: "auto",
          },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1}
          justifyContent="center"
          alignItems="flex-start"
          useFlexGap
          sx={{ width: "100%", display: { xs: "flex" } }}
        >
          {projects.map(({ title, subheader, description, content }, index) => (
            <Card
              key={index}
              component={Button}
              onClick={() => handleIndexChange(index)}
              sx={(theme) => ({
                flexDirection: "column",
                p: 0,
                height: "fit-content",
                width: "100%",
                borderRadius: "1px",
                outline: "1px solid",
                outlineColor:
                  theme.palette.mode === "light"
                    ? alpha("#BFCCD9", 0.5)
                    : alpha("#9CCCFC", 0.1),
                boxShadow:
                  theme.palette.mode === "light"
                    ? `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}`
                    : `0 0 24px 12px ${alpha("#033363", 0.2)}`,
                backgroundColor:
                  projectIndex === index ? "action.selected" : undefined,
                borderColor: (theme) => {
                  if (theme.palette.mode === "light") {
                    return projectIndex === index
                      ? "primary.light"
                      : "primary.dark";
                  }
                  return projectIndex === index
                    ? "primary.dark"
                    : "primary.light";
                },
              })}
            >
              <CardMedia
                component="img"
                height="194"
                image="https://placehold.co/600x400"
                alt={title}
              />
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
                <div>
                  <Typography
                    color="text.primary"
                    variant="body2"
                    fontWeight="bold"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    variant="body2"
                    sx={{ textTransform: "capitalize", my: 0.25 }}
                  >
                    {subheader}
                  </Typography>
                  {projectIndex === index && (
                    <Box
                      sx={{
                        position: "absolute",
                        backgroundColor: "primary.main",
                        width: "100%",
                        height: 5,
                        bottom: 0,
                        left: 0,
                      }}
                    />
                  )}
                </div>
              </Box>
            </Card>
          ))}
        </Stack>
      </Grid>
    </Container>
  );
}
