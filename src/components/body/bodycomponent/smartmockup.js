import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react"; 
import image1 from "../../../assest/images/Blog1.jpg"
import image2 from "../../../assest/images/Blog2.jpg"
import image3 from "../../../assest/images/Blog3.jpg"
import image4 from "../../../assest/images/Blog4.jpg"

const datablogpage = [
  {
    image: image1,
    title: "Photos vs. isolated mockups: What's the difference?",
  },
  {
    image:  image2 ,
    title: "How to get the perfect background for a mockup",
  },
  {
    image:image3 ,
    title: "Upgrade your portfolio to the next level with website mockups",
  },
  {
    image:  image4,
    title:
      "Bring your product mockups to life with video & GIF upload and export",
  }
];

const Smartmockup = () => {
  return (
    <Grid
      container
      lg={12}
      justifyContent={"center"}
      sx={{ marginTop: "140px" }}
    >
      <Grid
        item
        className=" col-xl-8 d-flex justify-content-center flex-column "
        sx={{maxWidth:{xl:"35%", lg:"35%"}}}
      >
        <Typography
          className="col-xl-12 col-lg-12  d-flex justify-content-center "
          sx={{
            textTransform: { xl: "uppercase" },
            marginBottom: { xl: "8px" },
            display: { xl: "block" },
            color: "#a7a7a7",
            fontWeight: { xl: "400" },
            textAlign: "center",
            fontSize: "inherit",
            lineHeight: "1.3",
          }}
        >
          SMARTMOCKUPS LEARNING LIBRARY
        </Typography>
        <Typography
          className="col-xl-12 col-lg-12 d-flex"
          variant="h2"
          sx={{
            
            marginBottom: { xl: "80px" },
            fontSize: { xl: "2.4em" },
            lineHeight: { xl: "1.333333333em" },
            fontWeight: { xl: "700" },
            justifyContent: 'center',
            textAlign:"center"
          }}
        >
        Get tips from our blog, be inspired, and learn more 
        </Typography>
      </Grid>
      <Grid
        item
        className="d-flex "
          xl={8}
          lg={8}
           >
        <ImageList
          className="  d-flex"
          gap={10} 
        >
          {datablogpage.map((data, index) => (
            <ImageListItem
              key={index}
              sx={{
                width: { xl: "40%" },
                height: { xl: "20%" },
                lineHeight: "1.3",
              }}
            >
              <img
      
                style={{
        
                    // width:"294.5px",
                    // height:"173.52px",
                  flexGrow: "0",
                }}
                src={data.image}
              />
      
              <Typography variant="h3"

                sx={{
                   marginTop: "32px",
                   marginBottom: "16px",
                    fontSize: " 1.2em",
                   lineHeight: "1.66667em",
                  display:"block",
                  marginBlockStart: "1em",
                   marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                   marginInlineEnd: "0px",
                   textAlign: "left",
                   marginBlockStart: "1em",
                   marginBlockEnd: "1em",
                   display: "block",
                }}
              >
                {data.title}
              </Typography>
               
            </ImageListItem>
          ))}
        </ImageList>

        {/* <h4>1. Find your favorite website mockup</h4>
          <p>
            Open Smartmockups and discover an ever-growing selection of device
            photos and 3D renders, in all operating systems.
          </p> */}
      
      </Grid>
    </Grid>
  );
};

export default Smartmockup;
