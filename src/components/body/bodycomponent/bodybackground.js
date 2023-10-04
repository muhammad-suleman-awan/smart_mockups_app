import React from "react";
import images from "../../../assest/images/Header_Websites.png";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const Bodybackground = ({ data }) => {
  const styles = {
    paperContainer: {
      backgroundImage: ` url(${images})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 100%",

    },
  };

  return (
    <div className="col-xl-12 mb-5 d-flex justify-content-center ">
      <Box
        style={styles.paperContainer}
        className="col-xl-10 col-lg-12 justify-content-center "
        // style={{}}
      >
        <Box
          className="text-white mt-lg-5 mb-lg-5 ms-5 ps-xl-5 d-flex flex-column
            col-xl-6 col-lg-10 col-7 col-md-10 col-sm-11 align-items-xl-start  "
          sx={
            {
              //position: "absolute",
              // width: {xl:"33%",lg:"50%", md: "95%",sm:"95%", xs: "100%" },
              // height:{lg:300,xs:200},
              // top: { xl: "30%", lg: "30%", md: "28%", sm: "23%", xs: "20%" },
              // left: { xl: "15%", lg: "5%", md: "0%", sm: "5%" },
            }
          }
        >
          <Typography
            variant="body2"
            sx={data.toprowStyle}
            className="  d-flex  justify-content-start col-xl-12 pt-xl-5 pt-3 pb-3"
          >
            {data.topRow}
          </Typography>

          <Typography
            variant={data.variantValue}
            sx={data.toprowMiddle}
            className=" col-lg-12 col-12"
          >
            {data.middleRow}
          </Typography>
          <Button variant="text" sx={data.toprowBottom} className=" col-xl-12 mt-3 mb-3">
            👉 {data.endRowBtn}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Bodybackground;
