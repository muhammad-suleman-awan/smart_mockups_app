import React from "react";
import textbackimg from "../../../assest/images/Testimonial_Websites.png";
import n from '../../../assest/logo/n.png'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const backstyle = {
  backgroundImage: `url(${textbackimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
};

const Testimonial = () => {
  return (
    <div
      className="d-flex flex-row col-xl-12 pt-xl-5 mt-xl-5 justify-content-center "
      style={{ height: "17%" }}
    >
      <div
        className="d-flex col-xl-8 p-0 m-0 h-100 position-relative"
        style={backstyle}
      >
        {/* <div
          className="d-flex flex-row col-xl-3    position-absolute bg-white "
          style={{
            translate: "middle",
            top: "150px",
            left: "218px",
            height: "60%",
          }}
        >
          <p className="col-xl-9">
            "As designers, we can talk a lot about product design, user
            experience etc. But if a client can't see themselves in any of that,
            it doesn't exist. Smartmockups solves that problem for me. Every.
            Single. Time."
          </p>
          
        </div> */}
        <Grid container xl={3.2}  sx={{position:"relative",bgcolor:"white", marginLeft:{xl:"115px"},height:{xl:"55%"} , translate:"middle",
           top:{xl:"130px"},
          }}>
           <Grid item sx={{position:"absolute",
          }}>
          <Typography variant="p" sx={{fontSize:"1.33333333em",lineHeight:"1.3em", display:"block"}}>
          "As designers, we can talk a lot about product design, user
            experience etc. But if a client can't see themselves in any of that,
            it doesn't exist. Smartmockups solves that problem for me. Every.
            Single. Time."
          </Typography>
          <div className="d-flex flex-row mt-5">
              <div className="">

            <img src={n} className="mx-2" style={{width:"50px"}}></img></div>
            <div className="d-flex flex-column m-0 p-0">
            <p className="m-0">Nick D.</p>
            <small className="">Smartmockups user</small></div>
          </div>
          
        </Grid>  
        </Grid>
      </div>
    </div>
  );
};

export default Testimonial;
