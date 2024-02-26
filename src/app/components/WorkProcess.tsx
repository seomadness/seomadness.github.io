import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import vennDiagram from "images/work_process/venn-diagram-icon.png";
import wireframe from "images/work_process/mobile-wireframe-icons.png";
import persona from "images/work_process/persona-icon.png";
import treeChartFlow from "images/work_process/tree-chart-flow.png";
import userFlow from "images/work_process/user-research-icon.png";

const workProcessImages = [
  {
    image: vennDiagram,
    alt: "understand target audience",
    description: "Target Audience",
  },
  {
    image: userFlow,
    alt: "explore and discover",
    description: "Explore & Discover",
  },
  {
    image: treeChartFlow,
    alt: "user journey map",
    description: "Map User Experience",
  },
  {
    image: wireframe,
    alt: "design",
    description: "Design & Development",
  },
  {
    image: persona,
    alt: "evaluate",
    description: "Evaluate Usability",
  },
];

export default function WorkProcess() {
  return (
    <Grid
      container
      mt={5}
      spacing={2}
      columns={5}
      id="work-process"
      sx={{
        zIndex: -999,
        display: {
          xs: "auto",
        },
      }}
    >
      {workProcessImages.map(({ description, image, alt }, index) => {
        return (
          <Grid
            item
            key={index}
            xs={1}
            sx={{
              p: 1,
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Image
              src={image}
              width={0}
              height={0}
              // sizes="(max-width: 564px) 100vw"
              style={{
                marginBottom: -8,
                objectFit: "contain",
                objectPosition: "50% top",
                width: "100%",
                height: "auto",
              }}
              alt={alt}
              priority
            />

            <Typography
              component="span"
              color="text.secondary"
              variant="caption"
              textAlign="center"
            >
              {description}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
}
