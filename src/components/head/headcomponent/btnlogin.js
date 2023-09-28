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
              className=" "
              
              sx={{
                width: { xl: "20%", lg: "12%", md: "17%", sm: "17%", xs:"30%"},
                height: { xl: "30px", lg: "30px", md: "30px", sm: "3%",xs:'24px' },
                top: { xl: "10px", lg: "10px", md: "10px", sm: "10px",xs:"9px" },
                left: { xl: "110px", lg: "52%", md: "33%", sm: "48%",xs:'19%'  },
                
              }}
            >
              <small className="d-flex flex-nowrap text-black" >Sign In</small>
            </Button>
            <Button
              variant="outlined"
              classNameName="text-white border-0  border-light  rounded p-0"
              sx={{
                width: { xl: "37%", lg: "30%", md: "42%", sm: "33%", xs:"46%" },
                height: { xl: "30px", sm: "14%", xs:"50%" },
                top: { xl: "-7px", md: "-7px", sm: "-7px", xs:"-7px" },
                left: { xl: "120px", lg: "380px", md: "35%",sm:"50%", xs:"20%"  },
              }}
              style={{ backgroundColor: "rgb(255, 102, 0" }}
            >
              <Typography
                sx={{
                  textWrap: { xl: "nowrap" },
                  fontSize: { xl: "12px" },
                  width: { xl: "140px" },
                  left: { xl: "120px" },
                  fontSize:{xs:"8px", sm:".767rem"}
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
