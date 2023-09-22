import React from "react";
import ButtonHeader from "./headcomponent/btnheader";
import LoginButton from "./headcomponent/btnlogin";
import { Box, Grid } from "@mui/material";
import Piclogo from "./headcomponent/log.js";
const Index = () => {
  return (
    <div>
      <Grid container  sx={{boxShadow: "0 0 20px 0  rgba(0,0,0,.2)"
       }}  padding={{xl:1.5, lg:2}}  
      //  className="bg-info"
        >
        <Grid item xl={1.5} lg={6} md={6}  order={{ xs: 1, lg: 1 }} >
          <Piclogo> </Piclogo>
        </Grid>
        
         <Grid
            borderTop={{xs:1, lg:0}} 
          item
          xl={8}
          
          md={{ flexDirection: "row-reverse" }}
      
          xs={12}
          order={{ xs: 3, xl: 2 }}
          lg={12}

        >
          <ButtonHeader></ButtonHeader>
        </Grid>

        <Grid  item xl={2.5} md={6} lg={6}   order={{ xs: 2, xl: 3 }} >
          <LoginButton></LoginButton>
        </Grid> 
      </Grid>
    </div>
  );
};

export default Index;
