import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import logoimage from "../../../assest/logo/logo.png";

const Piclogo = () => {
  return (
    <>
      <Grid
        container
        py={3.5}
        xs={12}
        className="gap-4  d-flex justify-content-end"
      >
        <Box
          component="img"
          sx={{
            height: 30,
            width: 300,

            maxHeight: { xl: 500, xs: 25, md: 50 },
            maxWidth: { xl: 500, xs: 75, md: 150 },
          }}
          pr={5}
          mt={0}
          alt="The house from the offer."
          src={logoimage}
        />
      </Grid>
    </>
  );
};

export default Piclogo;
