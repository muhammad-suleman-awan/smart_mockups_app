import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const LoginButton = () => {
  return (
    <div className="">
      <Grid container sx={{}}>
        <Grid item xs={12} lg={12} className="">
          <Stack
            spacing={2}
            className="d-flex flex-row "
            sx={{
              marginLeft: { xl: "0px" },
            }}
          >
            <Button
              variant="outlined"
              classNameName=" d-flex border-0 "
              sx={{
                width: { xl: "20%", lg: "100px" },
                height: { xl: "30px" },
                top: { xl: "10px" },
                left: { xl: "110px" },
              }}
            >
              <small className="d-flex flex-nowrap text-black">Sign In</small>
            </Button>
            <Button
              variant="outlined"
              classNameName="text-white border-0  border-light  rounded p-0"
              // style={{
              //
              //   fontWeight: "15px",
              //     display: "flex",
              //   fontStyle: "15px",
              // }}
              sx={{
                width: { xl: "37%", lg: "100px" },
                height: { xl: "30px" },
                top: { xl: "-7px" },
                left: { xl: "120px" },
              }}
               style={{backgroundColor:"rgb(255, 102, 0",  }}
            >
              <Typography
                sx={{
                  textWrap: { xl: "nowrap" },
                  fontSize: { xl:"12px"} ,
                  width: { xl: "140px" },
                  left: {xl:"120px"},
                  
                }}
                className="text-white"
              >
                {" "}
                Get started for free
              </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginButton;
