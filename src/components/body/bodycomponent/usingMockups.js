import React from "react";
import Grid from "@mui/material/Grid";
import collectionpic from "../../../assest/images/Collection_Header_Websites.png";
const Mockupusing = () => {
  return (
    <>
      <Grid container className=" col-12">
        <Grid item>
          <div className="d-flex flex-row justify-content-center gap-5 ">
            <div className="  col-xl-4">
              <span>USING MOCKUPS</span>
              <h3> Bring your design to life and impress your client</h3>
              <p>
                {" "}
                Ready to present your fresh website design to the client? Forget
                about sending old-fashioned PDF files, instead create a
                memorable presentation with mockups. With website mockups from
                Smartmockups, you can create an eye-catching website
                presentation that helps the client understand your vision. Using
                Smartmockups takes just seconds and the result is a professional
                way of presenting your design idea across all devices. No
                graphic design or skills needed.
              </p>
            </div>
            <div className=" col-xl-4 bg-info">
                <img src={collectionpic} height={390}></img>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Mockupusing;
