import React from "react";
import Grid from "@mui/material/Grid";
import HighQMimage from "../../../assest/logo/High-quality mockup images.png";
import UpVideog from "../../../assest/logo/Upload video or GIF.png";
import SshotUrl from "../../../assest/logo/Screenshots from a URL.png";
import SingleMultidevice from "../../../assest/logo/Single and multiple devices.png";

const Btnbody2 = () => {
  return (
    <>
      <Grid container justifyContent={"center"} gap={5} py={5}>
        <Grid item xl={2}>
          <div classNameName=" flex-column d-flex  ">
            <div classNameName=" col-12">
              <img src={HighQMimage}></img>
            </div>
            <div className=" col-12">
              <h3>High-quality mockup images </h3>
            </div>
            <div className="  col-12">
              <span>
                With Smartmockups you can upload GIFs and videos to bring your
                website and app to life. No flat, boring presentations for your
                work!
              </span>
            </div>
          </div>
        </Grid>
        <Grid item bgcolor={" "} xl={2}>
          <div className=" flex-column d-flex  ">
            <div className=" col-12">
              {" "}
              <img src={UpVideog}></img>{" "}
            </div>
            <div className=" col-12">
              <h3>Upload video or GIF</h3>
            </div>
            <div className="  col-12">
              <span>
                With Smartmockups you can upload GIFs and videos to bring your
                website and app to life. No flat, boring presentations for your
                work!
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xl={2}>
          <div className=" flex-column d-flex  ">
            <div className=" col-12">
              <img src={SshotUrl}></img>
            </div>
            <div className=" col-12">
              <h3>Screenshots from a URL</h3>
            </div>
            <div className="  col-12">
              <span>
                Show off any page of a website by simply typing the URL and
                adding a browser. Save yourself time and let Smartmockups do the
                work.
              </span>
            </div>
          </div>
        </Grid>
        <Grid item xl={2}>
          <div className=" flex-column d-flex  ">
            <div className=" col-12">
              <img src={SingleMultidevice}></img>
            </div>
            <div className=" col-12">
              <h3>Single and multiple devices</h3>
            </div>
            <div className="  col-12">
              <span>
                Explore our library of mockups ranging from laptops and desktops
                to smartphones, in all operating systems. Plus, we've got
                responsive mockup sets and screens, too.
              </span>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Btnbody2;
