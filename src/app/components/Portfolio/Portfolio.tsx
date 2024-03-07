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
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import accountWeb from "images/portfolio/account-web-access-prototype.png";
import dashboardFinal from "images/portfolio/dashboard-final-data.png";
import remoteDevice from "images/portfolio/remote-device-interaction-shell.png";
import deviceReservation from "images/portfolio/reservation.png";

const CardComponent = ({ ...props }) => <Card {...props} />;

const CardButton = styled(CardComponent)(({ theme }) => ({
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  minWidth: "400px",
  background: theme.palette.background.paper,
  borderBottom: "7px solid transparent",
  borderRadius: 2,

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

  "&.MuiPaper-root": { padding: 0, margin: 0 },

  "@keyframes borderAnimation": {
    "0%": {
      borderImage: "linear-gradient(to right, #366388 , transparent) 1 0",
    },
    "100%": {
      borderImage: "linear-gradient(to right, transparent, #366388) 1 0",
    },
  },
}));

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

const projects = [
  {
    title: "Main Page",
    show: false,
    image: "",
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
                        justifyContent: "space-between",
                        alignItems: "left",
                        background: "transparent !important",
                        py: 1.5,
                        px: 2,
                      }}
                    >
                      <Grid item xs>
                        <Typography
                          color="text.primary"
                          variant="h5"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          component="span"
                          color="text.secondary"
                          variant="body1"
                          sx={{ textTransform: "capitalize" }}
                        >
                          {description} {subheader}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        color="text.primary"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pt: 1,
                        }}
                      >
                        {projectIndex === index ? <></> : <ArrowDownwardIcon />}
                      </Grid>
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
