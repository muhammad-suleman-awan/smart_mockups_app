import React from "react";
import images from "../../../assest/images/Header_Websites.png";
import Button from "@mui/material/Button";

const Bodybackground = () => {


  return (
    <div className="row py-5 d-flex justify-content-center  m-0 col-xl-12 col-lg-10 col-sm-1">
      <div className="col-xl-10 col-sm-4    ">
        <div className="bg-info"
           
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
            className="d-flex flex-column col-xl-12 px-5 pt-5 "
            style={{}}
          > 
              <h5 className="py-5 px-5 d-flex flexwrap-nowrap text-light ">
                800+ Website Mockups
              </h5>
            
            <div classNameName="">
              <p className="px-5 d-flex flex-wrap text-light col-xl-3">
                Create high-quality product images to promote your responsive
                web design across devices using Smartmockups website mockup
                generator. Choose a mockup, customize and download in seconds.
              </p>
            </div>
            <div >
              <Button variant="outlined" className="bg-light mx-5">
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
