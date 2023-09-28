import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { red } from "@mui/material/colors";

const ButtonHeader = () => {
  const heade_btn = [
    {
      btn_label: "All mockups",
    },
    {
      btn_label: "Technonlogy",
    },
    {
      btn_label: "Print",
    },
    {
      btn_label: "Packaging",
    },
    {
      btn_label: "Apparel",
    },
    {
      btn_label: "Home & living",
    },
    {
      btn_label: "Seasonal",
    },
  ];

  return (
    <div className="d-flex flex-column   overflow-auto  ">
      <Grid
        container
        sx={{
          paddingTop: { xl: 1.5, lg: 2 },
          paddingLeft: { xl:6 },
          // justifyContent: { lg: "center" },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            gap: 4.5,
            top: { xl: "5" },
       

            justifyContent: {  xl:"left" ,  lg: "center", sm: "center",xs:"left" },
            paddingLeft: { xl: "6" },
          }}
        >
          {heade_btn.map((a, index) => (
            <div key={index} className=" ">
              <label
                className="  px-xl-0 top-5  d-flex flexwrap-nowrap "
                style={{ borderRadius: "0px", whiteSpace:"nowrap" }}
              >
                {a.btn_label}
              </label>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonHeader;
