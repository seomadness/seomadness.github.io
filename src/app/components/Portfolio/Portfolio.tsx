import * as React from "react";
import { styled } from "@mui/system";
import PortfolioDetails from "./PortfolioDetails";
import Image from "next/image";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card, { CardOwnProps } from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import accountWeb from "../../../images/portfolio/account-web-access-prototype.png";

const CardComponent = ({ ...props }) => <Card {...props} />;

const CardButton = styled(CardComponent)(({ theme }) => ({
  p: 0,
  flexDirection: "column",
  height: "fit-content",
  width: "100%",
  minWidth: "400px",
  borderRadius: 0,
  background: "transparent",
  ".MuiButtonBase": {
    p: 0,
  },
  "&.selected:hover": {
    background: theme.palette.background.paper,
  },
}));

const projects = [
  {
    title: "Dashboard",
    subheader: "2024 - 2023",
    description: "Design",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Remote Device Interaction",
    subheader: "2023",
    description: "Design & Development",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Reservation System",
    subheader: "2022",
    description: "Design & Development",
    image: "https://placehold.co/600x400",
  },
  {
    title: "Account Management Services",
    subheader: "2021",
    description: "Design",
    image: accountWeb,
  },
];

export default function Portfolio() {
  const [projectIndex, setProjectIndex] = React.useState<number | undefined>(
    undefined
  );

  function scrollToPortfolio() {
    const portfolioElement = document.getElementById("portfolio-section");
    if (portfolioElement) {
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
        {projects.map(({ title, subheader, description, image }, index) => (
          <Grid item key={title} sm={12} md={6}>
            <CardButton
              className={projectIndex === index ? "selected" : "selectable"}
              key={index}
              component={Button}
              onClick={() => handleIndexChange(index)}
              variant=""
              sx={{
                backgroundColor:
                  projectIndex === index
                    ? (theme) => theme.palette.background.paper
                    : "transparent",
              }}
            >
              <Image
                src={image}
                width={0}
                height={400}
                sizes="(max-width: 564px) 100vw"
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 0%",
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
                  p: 1.5,
                  gap: 1,
                }}
              >
                <Typography
                  color="text.primary"
                  variant="body1"
                  fontWeight="bold"
                  sx={{ textTransform: "capitalize" }}
                >
                  {title}
                  <Typography
                    component="span"
                    color="text.secondary"
                    variant="body2"
                  >
                    <br />
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
                {projectIndex === index && (
                  <Box
                    sx={{
                      position: "absolute",
                      backgroundColor: "primary.main",
                      width: "100%",
                      height: 7,
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
      <div id="portfolio-section">
        <PortfolioDetails index={projectIndex} />
      </div>
    </Container>
  );
}
