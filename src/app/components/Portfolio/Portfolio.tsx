import * as React from "react";
import { styled } from "@mui/system";
import PortfolioDetails from "./PortfolioDetails";
import Image from "next/image";
import { alpha } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card, { CardOwnProps } from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import adminConsolePrototype from "../../../images/portfolio/admin-console-prototype.png";

const CardComponent = ({ ...props }) => <Card {...props} />;

const CardButton = styled(CardComponent)(({ theme }) => ({
  p: 0,
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  minWidth: "400px",
  borderRadius: 0,
  background: "transparent",
}));

const projects = [
  {
    title: "Dashboard",
    subheader: "2024 - 2023",
    description: "Hello World",
    image: "",
  },
  {
    title: "Device Interaction",
    subheader: "2023",
    description: "Hello World",
    image: "",
  },
  {
    title: "Reservation System",
    subheader: "2022",
    description: "Hello World",
    image: "",
  },
  {
    title: "Account Management",
    subheader: "2021",
    description: "Hello World",
    image: adminConsolePrototype,
  },
];

export default function Portfolio() {
  const [projectIndex, setProjectIndex] = React.useState<number | undefined>(
    undefined
  );

  function handleIndexChange(index: number) {
    setProjectIndex(index);
  }

  return (
    <Container id="portfolio" sx={{ py: { xs: 8, sm: 8 }, zIndex: 99 }}>
      <Grid
        container
        spacing={3}
        sx={{
          display: {
            xs: "auto",
          },
        }}
      >
        {projects.map(({ title, subheader, image }, index) => (
          <Grid item key={title} sm={12} md={6}>
            <CardButton
              key={index}
              component={Button}
              onClick={() => handleIndexChange(index)}
              sx={{
                backgroundColor:
                  projectIndex === index
                    ? (theme) => theme.palette.background.paper
                    : "transparent",
              }}
            >
              <Image
                src={image}
                height={400}
                sizes="(max-width: 564px) 100vw"
                style={{ objectFit: "cover" }}
                alt={title}
                priority
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  textAlign: "left",
                  flexDirection: { xs: "column", md: "row" },
                  justifyContent: "space-between",
                  alignItems: { md: "center" },
                  background: "transparent !important",
                  p: 1.5,
                  gap: 1,
                }}
              >
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
              </Box>
            </CardButton>
          </Grid>
        ))}
      </Grid>
      <PortfolioDetails index={projectIndex} />
    </Container>
  );
}
