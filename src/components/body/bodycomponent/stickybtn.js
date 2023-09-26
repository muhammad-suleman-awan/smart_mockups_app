import { Girl } from "@mui/icons-material";
import { Box, Button, Fab, Grid } from "@mui/material";
import React from "react";
import lefticon from "../../../assest/logo/left icon.jpg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

const Bottombtn = () => {
  return (
    <Grid container className="d-flex flex-row" xl={12}>
      <Grid item>
        <Box style={{ position: "fixed", top: "90%", left: "2%" }}>
          <Button
            variant="text"
            sx={{
              width: { xl: "10%" },
              backgroundColor: "#6aaae4",
              borderRadius: "10px",
            }}
          >
            <VerifiedUserIcon
              style={{ color: "white", width: "100%", height: "40%" }}
            />{" "}
          </Button>
        </Box>
      </Grid>
      <Grid item>
        <Box
          style={{
            position: "fixed",
            top: "90%",
            right: "2%",
            alignmentIetm: "right",
          }}
        >
          <Button
            variant="text"
            style={{
              fontSize: "14px",
              backgroundColor: "#fff",
              boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 7px",
              color: "rgb(57, 73,86)",
              fontSize: "14px",
              borderRadius: "35px",
              height: "35px",
              width:"auto",
              minWidth:"60px"
            }}
          >
            Need Help?
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Bottombtn;
