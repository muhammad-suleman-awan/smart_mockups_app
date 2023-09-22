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
        bgcolor={"red"}
      >
        <Box
          component="img"
          sx={{
            height: { xl: 60 },
            width: { xl: 60 },
            maxHeight: { xl: 500, xs: 25, md: 50 },
            maxWidth: { xl: 500, xs: 75, md: 150 },
            paddingLeft: { xl: 0, lg: 2 },
            marginRight: { xl: 0 },
            top: { xl: -15 },
            left: { xl: 50 },
          }}
          src={minilogo}
          className="position-absolute"
        />
        <Box
          component="img"
          sx={{
            height: { xl: 30 },
            width: { xl: 200 },
            // maxHeight: { xl: 500, xs: 25, md: 50 },
            // maxWidth: { xl: 500, xs: 75, md: 150 },
            paddingLeft: { xl: 3, lg: 3 },
            marginRight: { xl: 0 },
            top: { xl: 0, lg: 15 },
            left: { xl: 50 },
          }}
          src={logoimage}
          className="position-absolute"
        />
      </Grid>
    </>
  );
};

export default Piclogo;
