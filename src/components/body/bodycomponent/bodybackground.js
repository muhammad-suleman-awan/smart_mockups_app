import React from "react";
import images from "../../../assest/images/Header_Websites.png";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const Bodybackground = ({ data }) => {
  const styles = {
    paperContainer: { 
      backgroundImage: ` url(${images})`,
    },
  };

  return (
    <Box
      style={styles.paperContainer}
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: { xl: 1600, lg: 1440, md: 1050, sm: 950, xs: 440 },
        backgroundPosition: { xl: "center" },
        backgroundAttachment: "absolute",
        height:{xl:500,lg:360, md:300, sm:300, xs:145},
      
          
        // backgroundColor:{xl:"red", lg:"blue", md:"yellow",sm:"pink",xs:"orange"}
      }}
      className="col-xl-12 justify-content-center "
      // style={{}}
    >
    <Box
        className="text-white d-flex flex-column   col-xl-4 col-xs-4 align-items-xl-start align-items-md-center align-items-center"
        sx={{
          position: "absolute",
          // width: {xl:"33%",lg:"50%", md: "95%",sm:"95%", xs: "100%" },
          // height:{lg:300,xs:200},
          top: { xl: "30%", lg:"40%", md:"28%" , sm:"23%",xs:"20%"},
          left: { xl: "15%",lg:"5%", md:"0%", sm:"5%" },
        }}

      >
        <Typography variant="body2" sx={data.toprowStyle}  className="  d-flex  justify-content-start col-xl-12" >
          {data.topRow}
        </Typography>

        <Typography variant={data.variantValue} sx={data.toprowMiddle} className=" col-xl-12 col-6"> 
          {data.middleRow}
        </Typography>
        <Button variant="text" sx={data.toprowBottom} className=" col-xl-12">
          👉 {data.endRowBtn}
        </Button>
      </Box> 
    </Box>
  );
};

export default Bodybackground;
