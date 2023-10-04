import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const LoginButton = () => {
  return (
    <div className="py-2 px-2">
      <Grid container sx={{}}>
        <Grid item xs={12} lg={12} className="">
          <Stack
            spacing={2}
            className="d-flex flex-row justify-content-end gap-2"
            sx={{
              marginLeft: { xl: "0px" },
            }}
          >
            <Button
              className=" p-0"
       
            >
              <Box
                component="span"
                className="d-flex flex-nowrap text-black "
                border={"1px solid #c8c8c8"}
                backgroundColor={"#fff"}
                color={"#000"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                fontSize={".6rem"}
                padding={"8px 12px"}
              >
                Sign In
              </Box>
            </Button>
           

           <Button style={{ backgroundColor: "rgb(255, 102, 0" }} className="m-0">
              <Box
                component="span"
                className="text-white"
                sx={{
                  display: { xl: "block", xs: "block", sm: "none" },
                }}
              >
                {" "}
                Get started for free
              </Box>
              <Box
              className="text-white small-font-size"
                component="span"
                sx={{ display: { xs: "none", sm: "block", xl: "none" },
            
                 }}
              >
                {" "}
                Get started
              </Box>
            </Button> 
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginButton;
