import { Girl } from "@mui/icons-material";
import { Box, Button, Fab, Grid } from "@mui/material";
import React from "react";
import lefticon from "../../../assest/logo/left icon.jpg"

const Bottombtn = () => {
  return (
    
      <Grid container className="d-flex flex-row" xl={12}>
     
   <Grid item>
   <Box style={{ position: "fixed", top: "90%", left: "2%" }}>
          <Button variant="text" style={{backgroundColor:"#6aaae4"}}>fg  </Button>
        </Box>
   </Grid>
   <Grid item>
   <Box style={{ position: "fixed", top: "90%", right: "2%", alignmentIetm:"right" }} >
          <Button variant="text" style={{fontSize:"14px",backgroundColor:"#fff"}}>Need Help?</Button>
        </Box>
   </Grid>
       
      </Grid>
   
  );
};

export default Bottombtn;
