import React from "react";
import images from "../../../assest/images/Header_Websites.png";
import Button from "@mui/material/Button";

const Bodybackground = () => {


  return (
    <div class="row py-5 d-flex justify-content-center  m-0 col-xl-12 col-lg-10 col-sm-1">
      <div class="col-xl-10 col-sm-4    ">
        <div class="bg-info"
           
          style={{
            backgroundImage: `url("${images}")`,
            backgroundRepeat: 'round',
            height:"500px"
            // backgroundAttachment: "fixed",
            // backgroundPosition: "center",
            // backgroundSize: "60%",
            // backgroundRepeat: "no-repeat",
            // resize: "contain",
            // backgroundOrigin: "border-box",
            // backgroundAttachment: "local",
          }}
        >
          <div
            class="d-flex flex-column "
            style={{}}
          >
            <div class=" bd-highlight col-xl-12 xl-fs-1 text-light fs-5 flex-wrap">
              <h5 class="py-5 px-5 d-flex flexwrap-nowrap">
                800+ Website Mockups
              </h5>
            </div>
            <div class="mx-5 mb-5 col-xl-5  bd-highlight text-light ">
              <p style={{ display: "flex", flexWrap: "nowrap" }}>
                Create high-quality product images to promote your responsive
                web design across devices using Smartmockups website mockup
                generator. Choose a mockup, customize and download in seconds.
              </p>
            </div>
            <div class="mx-5 my-4 bd-highlight text-danger fs-5">
              <Button variant="outlined" class="bg-light">
                👉 Start creating
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodybackground;
