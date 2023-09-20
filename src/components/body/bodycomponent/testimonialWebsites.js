import React from "react";
import textbackimg from "../../../assest/images/Testimonial_Websites.png";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const Testimonial = () => {
  return (
    <div
      style={{
        background: `url(${textbackimg})`,
        backgroundRepeat: "noRepeat",
        height: "600px",
        //  maxWidth:"100%",
        backgroundPosition: "center",
        backgroundSize: "contain",
      }}
    >
      <Grid container xl={5} pt={5} justifyContent={"end"}>
        <Grid item class="bg-info">
          <Card sx={{ width: "350px" }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 5 }}>
                "As designers, we can talk a lot about product design, user
                experience etc. But if a client can't see themselves in any of
                that, it doesn't exist. Smartmockups solves that problem for
                me."
              </Typography>
              <Avatar
                sx={{ bgcolor: [500] }}
                aria-label="recipe"
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
              >
                N
              </Avatar>
              <Typography variant="body1">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;
