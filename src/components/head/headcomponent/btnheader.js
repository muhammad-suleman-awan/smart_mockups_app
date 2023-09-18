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
    <div className="d-flex flex-column  overflow-auto py-3 px-2">
      <Grid container>
        {heade_btn.map((a, index) => (
          <Grid item xl={1.5} xs={12} key={index} m={0} > 
            <Button
                variant="text" 
                class="border-0 bg-success   text-black    d-flex flex-wrap white-space: nowrap"
                style={{margin:"0"}}
              >
                {a.btn_label}
              </Button> 
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ButtonHeader;
