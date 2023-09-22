import React from "react";
import images from "../../assest/images/Header_Websites.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Bodybackground from "./bodycomponent/bodybackground";
import Btnbody2 from "./bodycomponent/body2background";
import Mockupusing from "./bodycomponent/usingMockups";
import Availablemockup from "./bodycomponent/availablemockup";
import Guidemockup from "./bodycomponent/stepbystepguide";
import Testimonial from "./bodycomponent/testimonialWebsites";
import Smartmockup from "./bodycomponent/smartmockup";
import BottomFooter from "./bodycomponent/footer";

const Bodyindex = () => {
  const backgroundTop = {
    topRow: "800+ Website Mockups",
    middleRow:
      "Create high-quality product images to promote your responsive web design across devices using Smartmockups website mockup generator. Choose a mockup, customize and download in seconds.",
    endRowBtn: "Start creating",
    styleToprow: "bg-danger",
    styleMiddleRow: "px-5 d-flex flex-wrap text-light col-xl-3",
    styleEndRowbtn: "bg-light mx-5 w-25",
    toprowStyle: {    fontSize: {xl:"3.33333em"},
    lineHeight: {xl:"1.24em"}, fontWeight: {xl:"700"} },
    toprowMiddle: {
      fontSize: {xl:"1.2em"},
      lineHeight: {xl:"1.66667em"},
      paddingTop: { xl: "20px" },
      textAlign: "left",
      
    },
    toprowBottom: {
      marginTop: { xl: "50px" },
      backgroundColor: { xl: "white" },
      color: { xl: "black" },
      fontSize: {xl:"1rem"},
      lineHeight: {xl:"1.5"},
      width: { xl: "40%" },
    },
  };

  const backgroundBottom = {
    topRow: "Get Start",
    middleRow: "Create your first website mockup online with Smartmockups",
    endRowBtn: "👉 Start creating",
    styleToprow: "py-5 px-5 d-flex flexwrap-nowrap text-light",
    styleMiddleRow: "px-5 d-flex flex-wrap text-light col-xl-3",
    styleEndRowbtn: "bg-light mx-5 w-25",
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xl={12}
          sx={{ justifyContent: "flex-center" }}
          // bgcolor={"red"}
        >
          <Bodybackground data={backgroundTop} />
          <Btnbody2 />
          <Mockupusing />
          <Availablemockup />
          <Guidemockup />
          <Testimonial />
          {/* <Bodybackground data = {backgroundBottom}/>   */}
          <Smartmockup />
          <BottomFooter />
        </Grid>
      </Grid>
    </>
  );
};
export default Bodyindex;
