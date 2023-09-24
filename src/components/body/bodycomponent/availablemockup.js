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
      sx={{ marginTop: { xl: "150px" } }}
      justifyContent={"center"}
    >
      <Grid item xl={9} className=" justify-content-center d-flex flex-column">
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
            marginBottom: { xl: "80px" },
            fontSize: "2.4em",
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
      <Grid item xl={8} className=" ">
        <Box className="d-flex justify-content-center  ">
          <ImageList
            sx={{ xl: { width: "50%" } }}
            className=" "
            cols={4}
            gap={12}
          >
            {imagesofavaiablemockup.map((item) => (
              <ImageListItem
                sx={{
                  xl: { width: "280px" },
                  xl: { height: "100%" },
                  xl: { borderRadius: "5px" },
                }}
              >
                <img srcSet={`${item.image}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Grid>
      <Grid item xl={9} className="d-flex justify-content-center  ">
        <Button
        
   variant="outlined"
   sx={{  background: { xl: "#00bd28" },color: { xl: "#fff" },     fontSize:{xl:"1rem"},
            padding:{xl:"12px 0px"},
            lineHeight:{xl:"1.5"},
            width:{xl:"24%"}
            }}
        >
          <Typography        sc={{
    
        
          }} > 👉 Create your first website mockup</Typography>
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
        </div> */}
      </Grid>
    </Grid>
  );
};

export default Availablemockup;
