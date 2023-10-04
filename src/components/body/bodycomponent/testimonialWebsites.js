import React from "react";
import textbackimg from "../../../assest/images/Testimonial_Websites.png";
import n from "../../../assest/logo/n.png";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const backstyle = {
  paperContainer: {
    backgroundImage: ` url(${textbackimg})`,
  },
};

const Testimonial = () => {
  return (
    <Box className=" "
      style={backstyle.paperContainer}
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: { xl: 1600, lg: 1440, md: 1050, sm: 950, xs: 350 },
        backgroundPosition: { xl: "center" },
        backgroundAttachment: "absolute",
        height: { xl: 700, lg: 600, md: 500, sm: 400, xs: 455 },
        marginBottom: "100px",
      }}
    >
        <Grid
     
              container
        xl={2.2}
        lg={2.2}
        md={4} 
        sm={6}
        xs={10}

        sx={{
          position: "relative",
          bgcolor: "white",
          marginLeft: { xl: "115px" },
          height: { xl: "50%", lg: "65%",md:"75%",sm:"60%",xs:"60%" },
          translate: "middle",
          top: { xl: "25%", lg:"15%", md:"10%",sm:"65%", xs:"30%" },
          left: {xl:"13.5%",lg:"15%", md:"7%", sm:"20%", xs:"10%"},
    

        }}
      >
        <Grid item
         sx={{ position: "absolute" }}
         >
          <Typography
            variant="p"
            sx={{
              fontSize: "1.33333333em",
              lineHeight: "1.3em",
              display: "block",
              py:{md:"10px",sm:"0px"},
              px:{md:"5px"},
              textAlign:"justify"
            }}
          >
            "As designers, we can talk a lot about product design, user
            experience etc. But if a client can't see themselves in any of that,
            it doesn't exist. Smartmockups solves that problem for me. Every.
            Single. Time."
          </Typography>
          <div className="d-flex flex-row mt-2">
            <div className="">
              <img src={n} className="mx-2" style={{ width: "50px" }}
              ></img>
            </div>
            <div className="d-flex flex-column m-0 p-0">
              <p className="m-0">Nick D.</p>
              <small className="">Smartmockups user</small>
            </div>
          </div>
        </Grid>
      </Grid> 
    </Box>
  );
};

export default Testimonial;
