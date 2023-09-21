import Grid from "@mui/material/Grid";
import React from "react";
import Availablemockupimg1 from "../../../assest/images/avaiab1mkup.png";
import Availablemockupimg2 from "../../../assest/images/available2mkup.png";
import Availablemockupimg3 from "../../../assest/images/availablemkup3.png";

const Guidemockup = () => {
  return (
    <Grid container xl={12} justifyContent={"center"} mt={5} >
      <Grid item className=" col-xl-8    ">
        <div className="d-flex justify-content-center flex-column">
          <div className="col-xl-12 d-flex justify-content-center">
            <span>YOUR STEP-BY-STEP GUIDE</span>
          </div>
          <div className="col-xl-12 d-flex justify-content-center">
            <h2>Three easy steps to your first mockup</h2>
          </div>
        </div>
      </Grid>
      <Grid item className="col-xl-8 d-flex flex-row   gap-2 ">
         <div className=" col-xl-3">
          <div className="d-flex justify-content-center flex-column">
            <img src={Availablemockupimg1} height={380}></img>
            <h4>1. Find your favorite website mockup</h4>
            <p>
              Open Smartmockups and discover an ever-growing selection of device
              photos and 3D renders, in all operating systems.
            </p>
          </div>
        </div>
        <div className="  col-xl-4">
          <div>
             <img src={Availablemockupimg2} height={380}></img>
            <h4>2. Upload your design and customize the mockup</h4>
            <p>
              Upload your design to the mockup and with one click you’ll get an
              instant preview. Our design tools will give your mockup some extra
              brilliance.
            </p>
          </div>
        </div>
        <div className="  col-xl-4">
          <div>
             <img src={Availablemockupimg3} height={380}></img>
            <h4>3. Download the final image</h4>
            <p>
              Once you’ve completed your mockup, download to save it.
              Congratulations on your first website presentation mockup.
            </p>
          </div>

        </div>  
      </Grid> 
    </Grid>
  );
};

export default Guidemockup;
