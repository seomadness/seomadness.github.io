import * as React from "react";
import { styled } from "@mui/system";
import PortfolioDetails from "./PortfolioDetails";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import accountWeb from "images/portfolio/account-web-access-prototype.png";
import dashboardFinal from "images/portfolio/dashboard-final-data.png";
import remoteDevice from "images/portfolio/remote-device-interaction-shell.png";
import deviceReservation from "images/portfolio/reservation.png";

const StackComponent = ({ ...props }) => (
  <Stack id="readable-stack" spacing={5} direction={"column"} {...props} />
);

export const ReadableStack = styled(StackComponent)(({ theme }) => ({
  "h4.title": {
    marginBottom: theme.spacing(-2),
    position: "relative",
    width: "fit-content",
  },
  ".MuiTypography-root": {
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    ".MuiTypography-root": {
      width: "65%",
    },
  },
}));

const CardComponent = ({ ...props }) => <Card {...props} />;

const CardButton = styled(CardComponent)(({ theme }) => ({
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  minWidth: "400px",
  background: theme.palette.background.default,
  borderBottom: "7px solid transparent",

  // Animate Hover Over Portfolio
  "&:hover:not(.selected)": {
    borderWidth: "7px solid",
    animation: "borderAnimation 1.5s infinite alternate",
  },

  // Except Selected
  "&.selected": {
    borderWidth: "7px solid",
    borderImage: "linear-gradient(to right, #366388 , transparent) 1 0",
    background: theme.palette.background.default,
  },

  "@keyframes borderAnimation": {
    "0%": {
      borderImage: "linear-gradient(to right, #366388 , transparent) 1 0",
    },
    "100%": {
      borderImage: "linear-gradient(to right, transparent, #366388) 1 0",
    },
  },
}));

const projects = [
  {
    title: "Main Page",
    show: false,
    image: "https://placehold.co/600x400",
  },
  {
    title: "Core Dashboard",
    subheader: "2024 - 2023",
    description: "Design",
    image: dashboardFinal,
    show: true,
  },
  {
    title: "Remote Device Platform",
    subheader: "2023",
    description: "Design & Development",
    image: remoteDevice,
    show: true,
  },
  {
    title: "Reservation System",
    subheader: "2022",
    description: "Design & Development",
    image: deviceReservation,
    show: true,
  },
  {
    title: "Account Management Services",
    subheader: "2021",
    description: "Design",
    image: accountWeb,
    show: true,
  },
];

export default function Portfolio() {
  const [projectIndex, setProjectIndex] = React.useState<number>(0);

  async function scrollToPortfolio() {
    const portfolioElement = document.getElementById("portfolio-section");
    const hasChild = await portfolioElement?.hasChildNodes;

    if (portfolioElement && hasChild) {
      const topTarget = portfolioElement.offsetTop;
      portfolioElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: topTarget,
        behavior: "smooth",
      });
    }
  }

  function handleIndexChange(index: number) {
    setProjectIndex(index);
    if (index) scrollToPortfolio();
  }

  return (
    <Container id="portfolio" sx={{ pt: { xs: 8, sm: 8 }, zIndex: 99 }}>
      <Grid
        container
        spacing={2}
        sx={{
          display: {
            xs: "auto",
          },
        }}
      >
        {projects.map(
          ({ title, subheader, description, image, show }, index) => {
            if (show)
              return (
                <Grid item key={title} sm={12} md={6}>
                  <CardButton
                    className={
                      projectIndex === index ? "selected" : "selectable"
                    }
                    key={index}
                    component={Button}
                    onClick={() => handleIndexChange(index)}
                  >
                    <Image
                      src={image}
                      width={0}
                      height={300}
                      sizes="(max-width: 564px) 100vw"
                      style={{
                        objectFit: "cover",
                        objectPosition: "left top",
                        width: "100%",
                      }}
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
                        pt: 1.5,
                        px: 1.5,
                        pb: 0.5,
                        gap: 1,
                      }}
                    >
                      <Typography
                        color="text.primary"
                        variant="h6"
                        fontWeight="400"
                        sx={{ textTransform: "capitalize" }}
                      >
                        {title}
                        <br />
                        <Typography
                          component="span"
                          color="text.secondary"
                          variant="body1"
                          sx={{}}
                        >
                          {description}
                        </Typography>
                      </Typography>
                      <Typography
                        color="text.secondary"
                        variant="body2"
                        sx={{ textTransform: "capitalize", my: 0.25 }}
                      >
                        {subheader}
                      </Typography>
                    </Box>
                  </CardButton>
                </Grid>
              );
            else return;
          }
        )}
      </Grid>
      <div id="portfolio-section">
        <PortfolioDetails index={projectIndex} />
      </div>
    </Container>
  );
}
