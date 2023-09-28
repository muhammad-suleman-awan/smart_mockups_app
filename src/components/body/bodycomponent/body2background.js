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
    // <div className="overflow-x-auto " >

    <div
      item
      className="  d-flex flex-row overflow-auto justify-content-around col-12"
      style={{ marginTop: "140px", maxWidth:"100vw" }}
    >
      <div className="d-flex  border-2 flex-column justify-content-center align-items-center col-md-6 col-xs-2">
        <img src={HighQMimage}></img>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
            whiteSpace: { lg: "nowrap" },
          }}
          className="w-100 py-4"
        >
          High-quality mockup images
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { xs: "4%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
            textAlign: { sm: "center" },
          }}
        >
          Choose from professional lifestyle images or isolated 3D renders to
          create engaging product presentations.
        </Typography>
      </div>

      <div className=" d-flex flex-column   justify-content-center align-items-center col-md-6 col-sm-6">
        <img src={UpVideog}></img>
        <Typography
          variant="h3"
          sx={{
            paddingLeft: { xs: "0px" },
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
          }}
          className="w-100 py-4"
        >
          Upload video or GIF
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { lg: "4%", md: "24%", sm: "5%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
            textAlign: "center",
          }}
        >
          With Smartmockups you can upload GIFs and videos to bring your website
          and app to life. No flat, boring presentations for your work!
        </Typography>
      </div>

      <div className="d-flex  flex-column  justify-content-center align-items-center col-md-6 col-sm-6">
        <img src={SshotUrl} className=""></img>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
            paddingTop: { lg: "8%", md: "15%" },
          }}
          className="w-100"
        >
          Screenshots from a URL
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { lg: "18%", sm: "11%", md: "20%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
            textAlign: "center",
          }}
          className="w-100 "
        >
          Show off any page of a website by simply typing the URL and adding a
          browser. Save yourself time and let Smartmockups do the work.
        </Typography>
      </div>

      <div className="d-flex  flex-column align-items-center col-md-6 col-sm-6">
        {" "}
        <img src={SingleMultidevice} className=""></img>
        <Typography
          variant="h3"
          sx={{
            paddingLeft: { lg: "0px" },
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
            paddingTop: { xl: "8%", md: "10%" },
          }}
          className="w-100  "
        >
          Single and multiple devices
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: { lg: "15%", sm: "8%", md: "20%", sm: "10%" },
            paddingLeft: { xs: "0px" },
            fontWeight: { xs: "400" },
            textAlign: "center",
          }}
        >
          Explore our library of mockups ranging from laptops and desktops to
          smartphones, in all operating systems. Plus, we've got responsive
          mockup sets and screens, too.
        </Typography>
      </div>
    </div>
    // </div>
  );
};

export default Btnbody2;
