import React from "react";
import Grid from "@mui/material/Grid";
import collectionpic from "../../../assest/images/Collection_Header_Websites.png";
import { Box, ImageList,   Typography } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";

const Mockupusing = () => {
  return (
    <Grid
      container
      className="flex-row"
      sx={{ marginTop: { xl: "140px" }, justifyContent: { xl: "center" },  }}
    >
      <Grid item className="  " xl={4}>
        <Typography
          sx={{
            fontWeight: { xl: "400" },
            fontSize: { xl: "inherit" },
            lineHeight: { xl: "1.3" },
            color: "#a7a7a7",
            deplay: "block",
            marginBottom: "8px",
          }}
        >
          USING MOCKUPS
        </Typography>
        <Typography level="h2">
          <h2
            style={{
              marginBottom: "24px",
              fontSize: "2.4em",
              lineHeight: "1.3333333333em",
              fontWeight: "700",
            }}
          >
            {" "}
            Bring your design to life and impress your client
          </h2>{" "}
        </Typography>
        <Typography sx={{width:{xl:"550px"} }}>
          <p
            style={{
              marginTop: "0",
              lineHeight: "1.5",
              fontWeight: "400",
              fontSize:"1.0666666667em", 
            }}
          >
            Ready to present your fresh website design to the client? Forget
            about sending old-fashioned PDF files, instead create a memorable
            presentation with mockups. With website mockups from Smartmockups,
            you can create an eye-catching website presentation that helps the
            client understand your vision. Using Smartmockups takes just seconds
            and the result is a professional way of presenting your design idea
            across all devices. No graphic design or skills needed.
          </p>
        </Typography>
      </Grid>
    <Grid item  className="" xl={4}>
      <ImageListItem
          className=""
          sx={{ width: { xl: "auto" }}}
        >
          <img src={collectionpic} className=""></img>
        </ImageListItem>
        </Grid>
    </Grid>
  );
};

export default Mockupusing;
