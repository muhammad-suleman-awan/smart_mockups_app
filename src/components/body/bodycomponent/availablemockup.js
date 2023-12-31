import {
  Box,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";
import img1 from "../../../assest/images/1.jpg";
import img2 from "../../../assest/images/2.jpg";
import img3 from "../../../assest/images/3.jpg";
import img4 from "../../../assest/images/4.jpg";
import img5 from "../../../assest/images/5.jpg";
import img6 from "../../../assest/images/6.jpg";
import img7 from "../../../assest/images/7.jpg";
import img8 from "../../../assest/images/8.jpg";
import { WrapText } from "@mui/icons-material";

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
    <Grid
      container
      sx={{
        marginTop: { md: "150px", xs:"100px" },
        overflow: "auto",
        // backgroundColor: {
        //   xl: "oragnge",
        //   lg: "blue",
        //   md: "yellow",
        //   sm: "pink",
        //   xs: "orange",
        // },
        paddingX:{lg:"24px"}
      }}
      justifyContent={"center"}
    >
      <Grid  item xl={9}   lg={9} xs={12}
        className=" justify-content-center d-flex flex-column"
      >

      {/* <h1>H1</h1> */}
          <Typography
          className="d-flex "
          justifyContent={"center"}
          sx={{
            textTransform: "uppercase",
            marginBottom: { xl: "8px" },
            color: "#a7a7a7",
          }}
        >
          HUNDREDS OF MOCKUPS AVAILABLE
        </Typography>
        <Typography
          variant="h2"
          className="d-flex justify-content-center "
          sx={{
            marginBottom: "80px",
            fontSize: "1.8em",
            lineHeight: "1.33333333em",
            fontWeight: "700",
            textAlign: "center",
            paddingLeft: { xl: "20px" },
          }}
        >
          Discover inspiration in our ever-growing<br></br> website mockup
          library
        </Typography> 
      </Grid>

      <Grid item  xl={8} lg={12}  xs={12} className="overflow-auto px-3 "
       sx={{
        display:{xs:"flex", },
        flexDirection:{xs:"row",sm:"row"},
        flexWrap:{xs:"nowrap", sm:"Wrap"}
       }}
      >
         {imagesofavaiablemockup.map((item) => (
          <img
            srcSet={`${item.image}`}
            className="col-lg-3 p-1 col-md-6 col-4 "
          />
        ))} 

        {/* <h1>H2</h1> */}
      </Grid>



      <Grid item xs={12} className="d-flex justify-content-center py-5  px-3">
        <Button 
          sx={{
            background: "#00bd28",
            color: "#fff",
            
          }}
        >
          <Box component="span" sx={{    fontSize:  "1rem" ,
            padding:   "12px 0px" ,
            lineHeight: "1.5" }} className="p-0"> 👉 Create your first website mockup</Box>
        </Button>
        
 

      {/* <div classNameName="d-flex justify-content-center">
          <div classNameName="mx-5 my-4 bd-highlight text-danger fs-5 d-flex justify-content-center">
            <Button
              variant="outlined"
              classNameName="d-flex justify-content-center"
             style={{background:"#00bd28",}}
             
            >
            </Button>
          </div>
        </div>  */}
      </Grid>
    </Grid>
  );
};

export default Availablemockup;
