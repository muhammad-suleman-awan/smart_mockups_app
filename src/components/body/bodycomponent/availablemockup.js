import { Button, Grid, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import img1 from "../../../assest/images/1.jpg";
import img2 from "../../../assest/images/2.jpg";
import img3 from "../../../assest/images/3.jpg";
import img4 from "../../../assest/images/4.jpg";
import img5 from "../../../assest/images/5.jpg";
import img6 from "../../../assest/images/6.jpg";
import img7 from "../../../assest/images/7.jpg";
import img8 from "../../../assest/images/8.jpg";

const imagesofavaiablemockup = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
];
const Availablemockup = () => {
  return (
    
      <Grid container mt={5} justifyContent={"center"}>
        <Grid item xl={9}>
          <div className="d-flex flex-column justify-content-center">
            <div className="col-xl-12 d-flex justify-content-center">
              <span>HUNDREDS OF MOCKUPS AVAILABLE</span>
            </div>
            <div className="col-xl-12 d-flex justify-content-center">
              <h1>
                Discover inspiration in our ever-growing website mockup library
              </h1>
            </div>
          </div>
        </Grid>
        <Grid item xl={9}  >
                <div className="d-flex justify-content-center">
                
        <ImageList sx={{ width: 1300, height: 600 }} cols={4}  >
      {imagesofavaiablemockup.map((item) => (
        <ImageListItem key={item.img}>
        
          <img
            srcSet={`${item.image}`} 
            loading="lazy"
            
          />
        </ImageListItem>
      ))}
    </ImageList>

    </div>
        </Grid>
        <Grid item  xl={9} className="d-flex justify-content-center mb-5">
            <div classNameName="d-flex justify-content-center">
            <div classNameName="mx-5 my-4 bd-highlight text-danger fs-5 d-flex justify-content-center">
              <Button variant="outlined" classNameName="bg-success d-flex justify-content-center">
                👉 Create your first website mockup
              </Button>
            </div>
            </div>
        </Grid>
      </Grid>
     
  );
};

export default Availablemockup;
