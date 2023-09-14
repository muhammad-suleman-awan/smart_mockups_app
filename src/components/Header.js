import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { spacing } from "@mui/system";
import Typography from "@mui/material/Typography";
import { positions } from "@mui/system";

const Header = () => {
  return (
    <>
      <Grid
        container
        px={2}
        //  sx={{

        //          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        //          }}
      >
      
        <Grid
          item
          xs={6}
          gap={2}
          pt={1} 
          sx={{
            display: "flex",
          }}
          className="shadow-sm p-3  bg-white rounded"

        >
          <img src="" alt={""} loading="" />
          <h6 style={{ color: "lightblue", paddingTop: "3px" }}>
            SMARTMOCKUPS
          </h6>
        </Grid>
        <Grid
        className="shadow-sm p-3  bg-white rounded"
          item
          xs={6}
          gap={2}
          sx={{ m: 0, display: "flex", justifyContent: "end" }}
          pt={1} 
        >
          <button className=" border-0 rounded">Sign In</button>
          <button
            bgcolor={"orange"}
            className="border-0  color-white rounded "
            style={{ backgroundColor: "#ef5350" }}
          >
            Get started for free
          </button>
        </Grid>

        <Grid
          item
          xs={12}
          className="bg-red shadow-sm p-3 mb-5 bg-white rounded"
          ml={0}
          mt={2}
          bgcolor={""}
          gap={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div mx={3}>ALl Mockups</div>
          <div>Technology</div>
          <div>Print</div>
          <div>Packaging</div>
          <div>Apparel</div>
          <div>Home & living</div>
          <div>Seasonal</div>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
