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

const Bodyindex = () => {
  return (
    <>
      <Grid container  >
        <Grid
          item
          xl={12}
          sx={{ justifyContent: "flex-center" }}
          // bgcolor={"red"}
        > 
         <Bodybackground />  
         <Btnbody2 />
         <Mockupusing/>
         <Availablemockup />
         <Guidemockup/>
         <Testimonial/>
         <Bodybackground classNameforupprttext upp/>  
        <Smartmockup/>
        </Grid>
      </Grid>
    </>
  );
};
export default Bodyindex;
