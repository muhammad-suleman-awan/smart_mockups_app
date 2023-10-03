import { Box, Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import image1 from "../../../assest/images/Blog1.jpg";
import image2 from "../../../assest/images/Blog2.jpg";
import image3 from "../../../assest/images/Blog3.jpg";
import image4 from "../../../assest/images/Blog4.jpg";

const datablogpage = [
  {
    image: image1,
    title: "Photos vs. isolated mockups: What's the difference?",
  },
  {
    image: image2,
    title: "How to get the perfect background for a mockup",
  },
  {
    image: image3,
    title: "Upgrade your portfolio to the next level with website mockups",
  },
  {
    image: image4,
    title:
      "Bring your product mockups to life with video & GIF upload and export",
  },
];

const Smartmockup = () => {
  return (
    <Grid
      container
      lg={12}
      justifyContent={"center"}
      sx={{ marginTop: "140px", marginBottom: "5%" }}
      // className="border border-info     "
      gap={5}
    >
      <Grid
        item
        className=" col-xl-12 d-flex justify-content-center flex-column
        
         "
      >
        <Typography
          className="col-xl-12 col-lg-12  d-flex justify-content-center py-5 "
          sx={{
            textTransform: { xl: "uppercase" },
            marginBottom: { xl: "8px" },
            display: { xl: "block" },
            color: "#a7a7a7",
            fontWeight: { xl: "400" },
            textAlign: "center",
            fontSize: "inherit",
            lineHeight: "1.3",
          }}
        >
          SMARTMOCKUPS LEARNING LIBRARY
        </Typography>
        <Typography
          className="col-xl-12 col-lg-12 d-flex"
          variant="h2"
          sx={{
            marginBottom:"80px" ,
            fontSize:"2.4em" ,
            lineHeight:"1.333333333em",
            fontWeight:"700" ,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Get tips from our blog, be inspired, and learn more
        </Typography>
      </Grid>

      {datablogpage.map((data, index) => (
        <Grid
          item
          // className="border border-danger   "
          xl={2}
          lg={2.5}
          md={2.3}
          sm={5}
          xs={6}
          sx={{ mx: { xl: 1, lg: 1, md: 1, sm: 1 }, mt: { md: 0, sm: 1 } }}
        >
          <img
            style={{ maxWidth: "194px", minWidth: "100%" }}
            // sx={{
            //   height: 233,
            //   width: 350,
            //   maxHeight: { xs: 233, md: 167 },
            //   maxWidth: { xs: 350, md: 250 },
            // }}
            src={data.image}
          />
          <Typography
            // className="border border-primary"

            variant="h3"
            sx={{
              marginTop: "32px",
              marginBottom: "16px",
              fontSize: " 1.2em",
              lineHeight: "1.66667em",
              display: "block",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              marginInlineStart: "0px",
              marginInlineEnd: "0px",
              textAlign: "left",
              marginBlockStart: "1em",
              marginBlockEnd: "1em",
              display: "block",
            }}
          >
            {data.title}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Smartmockup;
