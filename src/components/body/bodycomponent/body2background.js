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
      gap={2}
      className="  col-xl-6"
      xl={12}
      sx={{ marginTop: { xl: "130px" } }}
    >
      <Grid item className="" xl={2}>
        <ImageListItem
          className=""
          sx={{ width: { xl: "32%" }, marginLeft: { xl: "29%" } }}
        >
          <img src={HighQMimage} className=""></img>
        </ImageListItem>
        <Typography
          variant="h3"
          sx={{
            paddingTop: { xl: "7%" },
            paddingLeft: { xl: "0px" },
            fontSize: { xl: "1.2em" },
            lineHeight: { xl: "1.6666666667em" },
            textAlign:"center"
          }}
        >
          High-quality mockup images
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xl: "4%" },
            paddingLeft: { xl: "0px" },
            fontWeight: { xl: "400" },
          }}
        >
         Choose from professional lifestyle images or isolated 3D renders to create engaging product presentations.
        </Typography>
      </Grid>
      <Grid item className="" xl={2}>
        <ImageListItem
          className=""
          sx={{ width: { xl: "32%" }, marginLeft: { xl: "29%" } }}
        >
          <img src={UpVideog} className=""></img>
        </ImageListItem>
        <Typography
          variant="h3"
          sx={{
            paddingTop: { xl: "7%" },
            paddingLeft: { xl: "0px" },
            fontSize: { xl: "1.2em" },
            lineHeight: { xl: "1.6666666667em" },
            textAlign:"center"

          }}
        >
          Upload video or GIF
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xl: "4%" },
            paddingLeft: { xl: "0px" },
            fontWeight: { xl: "400" },
                        textAlign:"center"

          }}
        >
          With Smartmockups you can upload GIFs and videos to bring your website and app to life. No flat, boring presentations for your work!
        </Typography>
      </Grid>
      <Grid item className="" xl={2}>
        <ImageListItem
          className=""
          sx={{ width: { xl: "32%" }, marginLeft: { xl: "29%" } }}
        >
          <img src={SshotUrl} className=""></img>
        </ImageListItem>
        <Typography
          variant="h3"
          sx={{
            paddingTop: { xl: "7%" },
            paddingLeft: { xl: "0px" },
            fontSize: { xl: "1.2em" },
            lineHeight: { xl: "1.6666666667em" },
            textAlign:"center"

          }}
        >
          Screenshots from a URL
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xl: "4%" },
            paddingLeft: { xl: "0px" },
            fontWeight: { xl: "400" },
          }}
        >
          Show off any page of a website by simply typing the URL and adding a browser. Save yourself time and let Smartmockups do the work.
        </Typography>
      </Grid>
      <Grid item className="" xl={2}>
        <ImageListItem
          className=""
          sx={{ width: { xl: "32%" }, marginLeft: { xl: "29%" } }}
        >
          <img src={SingleMultidevice} className=""></img>
        </ImageListItem>
        <Typography
          variant="h3"
          sx={{
            paddingTop: { xl: "7%" },
            paddingLeft: { xl: "0px" },
            fontSize: { xl: "1.2em" },
            lineHeight: { xl: "1.6666666667em" },
            textAlign:"center"

          }}
        >
          Single and multiple devices
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xl: "4%" },
            paddingLeft: { xl: "0px" },
            fontWeight: { xl: "400" },
          }} 
        >
          Explore our library of mockups ranging from laptops and desktops to smartphones, in all operating systems. Plus, we've got responsive mockup sets and screens, too.
        </Typography>
      </Grid>
      
      
    </Grid>
  );
};

export default Btnbody2;
