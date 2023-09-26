import React from "react";
import ButtonHeader from "./headcomponent/btnheader";
import LoginButton from "./headcomponent/btnlogin";
import { Box, Grid } from "@mui/material";
import Piclogo from "./headcomponent/log.js";
const Index = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          boxShadow: "0 0 20px 0  rgba(0,0,0,.2)",
          backgroundColor: {
            // lg: "red",
            // xl: "green",
            // md: "orange",
            // sm: "blue",
            // xs: "black",
          },
        }}
        padding={{ xl: 1.5, lg: 2 }}
      >
        <Grid item xl={1.5} lg={6} md={6} sm={6} xs={6} order={{ xs: 1, lg: 1 }}>
          <Piclogo> </Piclogo>
        </Grid>

        <Grid
          borderTop={{ xs: 1, xl: 0 }}
          item
          xl={8}
          md={{ flexDirection: "row-reverse" }}
          xs={12}
          order={{ xs: 3, xl: 2 }}
          lg={12} 
        >
          <ButtonHeader></ButtonHeader>
        </Grid>

        <Grid
          item
          xl={2.5}
          md={6}
          sm={6}
          lg={6}
          xs={6}
          // bgcolor={"green"}
          order={{ xs: 2, xl: 3 }}
        >
          <LoginButton></LoginButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
