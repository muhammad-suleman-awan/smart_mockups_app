import React from "react";
import images from "../../../assest/images/Header_Websites.png";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const Bodybackground = ({ data }) => {
  return (
    <Box
      className="row d-flex justify-content-center  col-xl-12 col-lg-10 col-sm-1"
      sx={{
        paddingTop: { xl: "3.3%" },
        height: { xl: "15.2%" },
      }}
    >
      {/* <Box className="col-xl-10 col-sm-4    "> */}
      <Box
        className=""
        style={{
          backgroundImage: `url("${images}")`,
          backgroundRepeat: "round",
        }}
        sx={{
          width: { xl: "81%" },
          // left: { xl:"30%"},
          position: "relative",
          marginLeft:{xl:"20px"}
        }}
      >
        <Box
          className="text-white "
          sx={{
            position: "absolute",
            width: { xl: "40%" },
            top: { xl: "25%" },
            left: { xl: "7%" },
          }}
        >
          <Typography variant="body2" sx={data.toprowStyle}>
            {data.topRow}
          </Typography>

          <Typography variant={data.variantValue} sx={data.toprowMiddle}>
          {data.middleRow}
          </Typography>
          <Button variant="text" sx={data.toprowBottom}>👉 {data.endRowBtn}</Button>

           
        </Box>

      </Box>
      {/* </Box> */}
    </Box>
  );
};

export default Bodybackground;
