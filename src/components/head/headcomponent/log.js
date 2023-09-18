import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const Piclogo = () => {
  return (
    <>
      <Grid container   
          xs={12}>
        <Box
          component="img"
          sx={{
            height: 100,
            width: 250,
            maxHeight: { xl: 50, xs: 25, md: 50 },
            maxWidth: { xl: 280, xs: 75, md: 150 },
          }}
          mt={2}
        
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
      </Grid>
    </>
  );
};

export default Piclogo;
