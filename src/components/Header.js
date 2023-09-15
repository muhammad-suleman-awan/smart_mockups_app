import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Stack } from "@mui/material";
import { spacing } from "@mui/system";
import Typography from "@mui/material/Typography";
import { positions } from "@mui/system"; 
import Button from '@mui/material/Button';
import { palette } from '@mui/system';



const Header = () => {
  return (
    <>
      <Grid
        container
        px={2} 
      >
        <Grid  
        xs={12}
        sx={{
                display: "flex",
              }} 
              className="bg-info shadow-sm p-0  bg-white rounded">
          <Grid container >
            <Grid
            xs={6}
              sx={{
                display: "flex",
              }}
            
            >
              <img src="" alt={""} loading="" />
               
              <Typography component="h1" sx={{color:'primary.main' , py:2 ,px:5 }}>SMARTMOCKUPS</Typography>

            </Grid>
            <Grid
            xs={6}
              sx={{ m: 0, display: "flex", justifyContent: "end" }}
              p={1}
              gap={2}
            >
                  <Button variant="outlined">Sign In</Button>
              <Button variant='outlined'
                // sx={{ bgcolor: 'warning.main' }}
                sx={{bgcolor: 'warning.main'}}
                style={{color:"white"}}
              >
                Get started 
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          className="bg-red shadow-sm p-0 mb-0 bg-white rounded"
          ml={0}
          mt={1}
          bgcolor={""}
          gap={3}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
        
      <Button variant="text" xs={12}  sx={{color: 'text.secondary'}}>All mockups</Button>
      <Button variant="text" sx={{color:'text.secondary'}}>Technology</Button>
      <Button variant="text" sx={{color:'text.secondary'}}>Print</Button>
      <Button variant="text" sx={{color:'text.secondary'}}>Packing</Button>
      <Button variant="text"  sx={{color:'text.secondary'}}>Apparel</Button>
      <Button variant="text"  sx={{color:'text.secondary'}}>Home & Living</Button>
      <Button variant="text"  sx={{color:'text.secondary'}}>Seasonal</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
