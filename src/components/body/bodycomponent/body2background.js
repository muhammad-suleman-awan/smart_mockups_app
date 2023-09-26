import React from "react";
import Grid from "@mui/material/Grid";
import HighQMimage from "../../../assest/logo/High-quality mockup images.png";
import UpVideog from "../../../assest/logo/Upload video or GIF.png";
import SshotUrl from "../../../assest/logo/Screenshots from a URL.png";
import SingleMultidevice from "../../../assest/logo/Single and multiple devices.png";
import { Box, Typography } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { Padding } from "@mui/icons-material";

const Btnbody2 = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      lg={12}
      xs={12}
      sx={{
        marginTop: { xs: "130px" },
        overflow: "auto",

        // backgroundColor: {
        //   xl: "white",
        //   lg: "blue",
        //   md: "yellow",
        //   sm: "pink",
        //   xs: "orange",
        // },
      }}
    >
      <Grid item className="" xl={2} lg={2} sm={6}  xs={3}>
        <img
          sx={{ width: { xl: "32%" }, marginLeft: { xl: "29%" } }}
          src={HighQMimage}
          className=""
        ></img>

        <Typography
          variant="h3"
          sx={{
            paddingTop: { xs: "7%" },
            paddingLeft: { xs: "0px" },
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
          }}
        >
          High-quality mockup images
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xs: "4%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
          }}
        >
          Choose from professional lifestyle images or isolated 3D renders to
          create engaging product presentations.
        </Typography>
      </Grid>
      <Grid item className="" xl={2} lg={2} sm={6} xs={3}>
        <img
          src={UpVideog}
          sx={{
            width: { xl: "32%", xs: "12%" },
            maxWidth: "35%",
            minWidth: "5%",
            marginLeft: { xl: "29%" },
          }}
        ></img>
        <Typography
          variant="h3"
          sx={{
            paddingTop: { xs: "7%" },
            paddingLeft: { xs: "0px" },
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
          }}
        >
          Upload video or GIF
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xs: "4%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
            textAlign: "center",
          }}
        >
          With Smartmockups you can upload GIFs and videos to bring your website
          and app to life. No flat, boring presentations for your work!
        </Typography>
      </Grid>
      <Grid item className="" xl={2} lg={2} sm={6} xs={3}>
        <img
          src={SshotUrl}
          className=""
          sx={{ width: { xl: "32%" }, marginLeft: { xl: "29%" } }}
        ></img>

        <Typography
          variant="h3"
          sx={{
            paddingTop: { xs: "7%" },
            paddingLeft: { xs: "0px" },
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
          }}
        >
          Screenshots from a URL
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xs: "4%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
          }}
        >
          Show off any page of a website by simply typing the URL and adding a
          browser. Save yourself time and let Smartmockups do the work.
        </Typography>
      </Grid>
      <Grid item className="" xl={2} lg={2} sm={6} xs={3}>
        <img
          src={SingleMultidevice}
          className=""
          sx={{ width: { xl: "32%" }, marginLeft: { xl: "29%" } }}
        ></img>

        <Typography
          variant="h3"
          sx={{
            paddingTop: { xs: "7%" },
            paddingLeft: { xs: "0px" },
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
          }}
        >
          Single and multiple devices
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xs: "4%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
          }}
        >
          Explore our library of mockups ranging from laptops and desktops to
          smartphones, in all operating systems. Plus, we've got responsive
          mockup sets and screens, too.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Btnbody2;
