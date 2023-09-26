import React from "react";
import images from "../../../assest/images/Header_Websites.png";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

const Bodybackground = ({ data }) => {
  const styles = {
    paperContainer: {
      height: 600,
      backgroundImage: ` url(${images})`,
      
    },
  };

  return (
    <Box style={styles.paperContainer} sx={{ backgroundRepeat:"no-repeat", backgroundSize:{xl:1800, lg:1500, md:1200,sm:1000,xs:430},backgroundPosition:{xl:"center"}, 
      backgroundAttachment:"absolute",   
      // backgroundColor:{xl:"red", lg:"blue", md:"yellow",sm:"pink",xs:"orange"}
    }}
    className="col-xl-12 justify-content-senter"
    
    >
        {/* <Box
          className="text-white "
          sx={{
            position: "absolute",
            width: { md: "50%", xs: "10%" },
            top: { lg: "25%" },
            left: { lg: "7%" },
          }}
        >
          <Typography variant="body2" sx={data.toprowStyle}>
            {data.topRow}
          </Typography>

          <Typography variant={data.variantValue} sx={data.toprowMiddle}>
            {data.middleRow}
          </Typography>
          <Button variant="text" sx={data.toprowBottom}>
            👉 {data.endRowBtn}
          </Button>
        </Box>     */}
    </Box>
  );
};

export default Bodybackground;
