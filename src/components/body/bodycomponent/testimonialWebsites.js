import React from "react";
import textbackimg from "../../../assest/images/Testimonial_Websites.png";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const backstyle = {
  backgroundImage: `url(${textbackimg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "100%",
};

const Testimonial = () => {
  return (
    <div
      className="d-flex flex-row col-xl-12 p-0 justify-content-center "
      style={{ height: "17%" }}
    >
      <div
        className="d-flex col-xl-8 p-0 m-0 h-100 position-relative"
        style={backstyle}
      >
        <div
          className="d-flex flex-row col-xl-2 h-50   position-absolute "
          style={{ translate: "middle", top: "30%" , start:"100%"}}
        >
        
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
