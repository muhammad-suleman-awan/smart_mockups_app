import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

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
    <div className="d-flex flex-column   overflow-auto ">
      <Grid container >
        <Grid
          item
          xs={12}
          sx={{ display: "flex", gap: 2,  }}
         >
          {heade_btn.map((a, index) => (
            <div key={index}>
              <label>{a.btn_label}</label>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ButtonHeader;
