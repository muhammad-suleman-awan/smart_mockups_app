import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const LoginButton = () => {
  return (
    <div class="py-3">
      <Grid container sx={{ justifyContent: "flex-end" }} spacing={2}   >
        <Grid item xs={12}  >
          <Stack spacing={1} direction="row" px={1}>
            <Button  variant="outlined" class=" bg-white text-black border-2 border-light  " >
            <Typography style={{ fontWeight: '8px', display: 'flex', fontStyle: '8px' ,
          flexWrap: 'nowrap',  letterSpacing: -1 }} >
            Sign In 
            </Typography>
            </Button>
            <Button  variant="outlined" class="  text-white border-1  border-light  rounded" style={{backgroundColor:"rgb(255, 102, 0)", letterSpacing: -1, fontStyle: '8px' }} >Get started For Free</Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginButton;
