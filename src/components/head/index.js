import React from "react";
import ButtonHeader from "./headcomponent/btnheader";
import LoginButton from "./headcomponent/btnlogin";
import { Box, Grid } from "@mui/material";
import Piclogo from "./headcomponent/log.js";
const Index = () => {
  return (
    <div>
      <Grid container  sx={{ boxShadow: 5 }} py={2} >
        <Grid item   xl={2} md={2}   order={{ xs: 1, lg: 1 }}>
          <Piclogo></Piclogo>
        </Grid>
        
        <Grid
            borderTop={{xs:1, md:0}} 
          item
          xl={8}
          md={{ flexDirection: "row-reverse" }}
          
          xs={12}
          order={{ xs: 3, xl: 2 }}
        >
          <ButtonHeader></ButtonHeader>
        </Grid>

        <Grid  item xl={2} md={4}    order={{ xs: 2, xl: 3 }} >
          <LoginButton></LoginButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
