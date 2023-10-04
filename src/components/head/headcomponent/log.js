import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import logoimage from "../../../assest/logo/logo.png";
import minilogo from "../../../assest/logo/Smartmockups_Logo_Symbol.png";

const Piclogo = () => {
  return (
    <>
      <Grid
        container
        xs={12}
        className=" d-flex  position-relative"
        lg={12}
        md={12}
        sx={{
          padding: "0px",
        }}
        bgcolor={"red"}
      >
        <Box
          component="img"
          sx={{
            height: { xl: 40 },
            width: { xl: 70 },
            maxHeight: { xl: 500, xs: 25, md: 50 , sm:50},
            maxWidth: { xl: 500, xs: 75, md: 150, sm:150 },
            paddingLeft: { xl: "1.5vw", lg: 2 },
            marginRight: { xl: 0 },
            top: { xl: 2, lg:"-5px", md: "-5px", sm: "-2px", xs:"10px" },
            left: { xl: 15, md: "15px", sm: "10px",xs:"10px" },
          }}
          src={minilogo}
          className="position-absolute"
        />

        <Box
          component="img"
          sx={{
            height: { xl: 30 },
            width: { xl: 220 },
            // maxHeight: { xl: 500, xs: 25, md: 50 },
            // maxWidth: { xl: 500, xs: 75, md: 150 },
            paddingLeft: { xl: "1.5vw", lg: "3", md: "3px" },
            marginRight: { xl: 0 },
            top: { xl: 10,lg:"10px", md: "10px", sm: "10px" },
            left: { xl: 20, lg: "5%" , md: "20px", sm: "15px" , xs:"15%"},
            display: { xs: "none", sm: "block" },
          }}
          src={logoimage}
          className="position-absolute"
        />
      </Grid>
    </>
  );
};

export default Piclogo;
