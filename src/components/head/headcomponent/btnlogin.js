import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const LoginButton = () => {
  return (
    <div className="">
      <Grid container sx={{ }} >
        <Grid item xs={12} lg={12}  >
          <Stack 
            spacing={2}
            direction="row"
           
            sx={{  
              marginLeft: {xl:'0px', } ,
              justifyContent:{lg:'flex-end'}
              
              }}
          >
            <Button
              variant="outlined"
              classNameName=" bg-white text-black border border-5 text-uppercase "
              sx={{
                width:{lg:"100px"}

              }}
            >
              <Typography
                style={{
                  fontWeight: "8px",
                  display: "flex",
                  fontStyle: "8px",
                  flexWrap: "nowrap", 
                }}
              >
               <span className="text-uppercase text-black ">Sign In</span> 
              </Typography>
            </Button>
            <Button
              variant="outlined"
              classNameName="text-white border-0  border-light  rounded"
              style={{
                backgroundColor: "rgb(255, 102, 0)",
                fontWeight: "15px",
                  display: "flex",
                fontStyle: "15px",
              }}
              sx={{
                width:{lg:'200px'}
              }}
            >
              <label className="text-white d-flex flex-nowrap">Get started For Free</label>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginButton;
