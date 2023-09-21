import { Grid } from "@mui/material";
import React from "react";
import image1 from "../../../assest/images/Blog1.jpg";
import image2 from "../../../assest/images/Blog2.jpg";
import image3 from "../../../assest/images/Blog3.jpg";
import image4 from "../../../assest/images/Blog4.jpg";

const Smartmockup = () => {
  return (
    <Grid container lg={12} justifyContent={"center"}>
      <Grid item lg={8} className="d-flex justify-content-center flex-column">
        <small className="d-flex justify-content-center">
          SMARTMOCKUPS LEARNING LIBRARY
        </small>
        <h1 className="d-flex justify-content-center">
          Get tips from our blog, be inspired, and learn more
        </h1>
      </Grid>
      <Grid item className="d-flex col-xl-8  ">
        <div className=" d-flex col-xl-12 gap-5 justify-content-center">
              <div className="col-xl-2">
                <img src={image1} className="" style={{width:"100%"}}></img>
                <p>Photos vs. isolated mockups: What's the difference?</p>
              </div>
              <div className="col-xl-2">
                <img src={image2} className="" style={{width:"100%"}}></img>
                <p>Photos vs. isolated mockups: What's the difference?</p>
              </div><div className="col-xl-2">
                <img src={image3} className="" style={{width:"100%"}}></img>
                <p>Photos vs. isolated mockups: What's the difference?</p>
              </div>
              <div className="col-xl-2">
                <img src={image4} className="" style={{width:"100%"}}></img>
                <p>Photos vs. isolated mockups: What's the difference?</p>
              </div>

        </div>
      </Grid>
    </Grid>
  );
};

export default Smartmockup;
