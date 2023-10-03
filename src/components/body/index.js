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
import Bottombtn from "./bodycomponent/stickybtn";

const Bodyindex = () => {
  const backgroundTop = {
    topRow: "800+ Website Mockups",
    middleRow:
      "Create high-quality product images to promote your responsive web design across devices using Smartmockups website mockup generator. Choose a mockup, customize and download in seconds.",
    endRowBtn: "Start creating",

    toprowStyle: {
      fontSize: { lg: "3.33333em",sm:"24px", xs:"1.3em" },
      lineHeight: { xs: "1.24em" },
      fontWeight: { lg: "700", md:"900",xs:"700" }, 
      justifyContent:{sm:"center", xs:"center"},
      textAlign:"center",
      whiteSpace:"nowrap"    },

    toprowMiddle: {
      fontSize: { sm: "1.2em",xs:"8px" },
      lineHeight: { xs: "1.66667em" },
      paddingTop: { lg: "20px" },
      textAlign: "left",

    },
    toprowBottom: {
       
      marginTop: { xl: "30px" },
      backgroundColor: { xs: "white" },
      color: { xs: "black" },
      fontSize: { xs: "0.9rem" },
      lineHeight: { xs: "2" },
      color: "#000",
      whiteSpace:"nowrap" ,
      width:{xl:"150px"}
    },
    variantValue: ["body2"],
    justifyContent:"center",
    

  };

  const backgroundBottom = {
    topRow: "Get Started",
    middleRow: "Create your first website mockup online with Smartmockups",
    endRowBtn: "Start creating",

    toprowStyle: {
      paddingTop: { xl: "0px" },
      opacity: { xl: ".6" },
      textTransform: "uppercase",
      marginBottom: { xl: "0px" },
      textAlign: "left",
      fontWeight: "400",
      boxSizing: "borderBox",
    },
    toprowMiddle: {
      marginBottom: { xl: "24px" },
      fontSize: "2.2em",
      lineHeight: { xl: "1.3333333em" },
      fontWight: "1000em",
      boxSizing: { xl: "borderBox" },
      display: "block",
      marginBlockStart: "0.22em",
      marginBlockEnd: "0.67em",
      marginInlineStart: "0px",
      textAlign: "left",

      fontWeight: "bold",
    },
    variantValue: ["h1"],
    toprowBottom: {
      marginTop: { xl: "10px" },
      backgroundColor: { xl: "white" },
      color: { xl: "black" },
      fontSize: { xl: "1rem" },
      lineHeight: { xl: "1.5" },
      width: { xl: "30%" },
      textAlign: "left",
      color: "#000",
    },
  };

  return (
    <>
      <Grid container  >
        <Grid item sm={12} sx={{ justifyContent: "flex-center" }} className=" pt-5  " style={{maxWidth:"100vw"}}  >
          <Bodybackground data={backgroundTop}  />
          <Btnbody2 />

          {/* <Bottombtn /> */}
          <Mockupusing />
          <Availablemockup />
          <Guidemockup />
           <Testimonial /> 
            <div style={
            {
              position:'relative'
            }
          }>
          <Bodybackground data={backgroundBottom }  />
          </div>    
          <Smartmockup />
          <BottomFooter />   
        </Grid>
      </Grid>
    </>
  );
};
export default Bodyindex;
