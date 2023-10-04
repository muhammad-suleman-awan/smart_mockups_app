import React from "react";
import Grid from "@mui/material/Grid";
import HighQMimage from "../../../assest/logo/High-quality mockup images.png";
import UpVideog from "../../../assest/logo/Upload video or GIF.png";
import SshotUrl from "../../../assest/logo/Screenshots from a URL.png";
import SingleMultidevice from "../../../assest/logo/Single and multiple devices.png";
import { Box, Typography } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { Padding } from "@mui/icons-material";

const Btnbody2 = () => {
  return (
    <Grid
      container
      className="pt-5 d-flex flex-row overflow-auto mb-5 "
      style={{ maxWidth: "100vw" ,minWidth:"100%"}}
      gap={{ xl: 12, lg: 8, md: 12, sm: 5, xs:0 }}
      xl={12}
      lg={12}
      xs={12}
      sx={{
        justifyContent: { sm: "center" },
        flexWrap: { xl: "nowrap", xs: "nowrap", sm: "wrap" },
        // paddingX: { sm: "12px", },
        backgroundColor: {
          // xl: "red",
          // lg: "blue",
          // md: "yellow",
          // sm: "pink",
          // xs: "darkgray",
        },
      }}
    >
      <Grid
        item
        xl={1.7}
        lg={2.4}
        md={2}
        sm={5}
        xs={12}
        className=" justify-content-center align-items-center "
        sx={{         paddingLeft: { sm: "0px",xs:"15px",  }
 }}
        
      >
        <img src={HighQMimage} className="  d-flex m-auto"></img>

        <Typography
          variant="h3"
          sx={{
            fontSize:"1.2em" ,
            lineHeight: "1.6666666667em" ,
            textAlign: "center",
            whiteSpace:"wrap" ,

            marginTop: "32px",
            marginBottom: "8px",
           
          }} 
        >
          High-quality mockup images
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: "4%",
            fontWeight: "400",
            textAlign: "center",
            width:{  xl:"267" , lg:"286px",md:"168px",sm:"318px",xs:"170px"}
          }}
        >
          Choose from professional lifestyle images or isolated 3D renders to
          create engaging product presentations.
        </Typography>
      </Grid>

      <Grid
        item
        xl={1.7}
        lg={2.4}
        md={2}
        sm={5}
        xs={12}      
      

        sx={{         paddingLeft: { sm: "0px",xs:"15px",  }
 }}

        className="    justify-content-center align-items-center "
        
      >
        <img
          src={UpVideog}
          className="d-flex m-auto justify-content-center"
        ></img>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
            whiteSpace:"wrap" ,
          
            marginTop:"32px",
            marginBottom:"8px",
 
          }}
          className="w-100 "
        >
          Upload video or GIF
        </Typography>
        <Typography
          variant="body2"
          sx={{
            paddingTop: "4%",
            fontWeight: "400",
            textAlign: "center",
            width:{  xl:"267" , lg:"286px",md:"168px",sm:"318px",xs:"170px"}

          }}
        >
          With Smartmockups you can upload GIFs and videos to bring your website
          and app to life. No flat, boring presentations for your work!
        </Typography>
      </Grid>

      <Grid
        item
 
        xl={1.7}
        lg={2.4}
        md={2}
        sm={5}
        xs={12}
        sx={{         paddingLeft: { sm: "0px",xs:"15px",  }
 }}
        className="  justify-content-center align-items-center  "
      >
        <img src={SshotUrl} className="d-flex m-auto"></img>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
            whiteSpace:"wrap" ,

            marginTop: "32px",
            marginBottom: "8px",
          }}
          className="w-100"
        >
          Screenshots from a URL
        </Typography>
        <Typography
          variant="body2"
          className="pb-2"
          sx={{
            paddingTop: "4%",
            fontWeight: "400",
            textAlign: "center",
            width:{  xl:"267" , lg:"286px",md:"168px",sm:"318px",xs:"170px"}

          }}
        >
          Show off any page of a website by simply typing the URL and adding a
          browser. Save yourself time and let Smartmockups do the work.
        </Typography>
      </Grid>

      <Grid
        item
        xl={1.7}
        lg={2.4}
        md={2}
        sm={5}
        xs={12}
        sx={{         paddingLeft: { sm: "0px",xs:"15px",  }
 }}
        className=" align-items-center  "
      >
        {" "}
        <img src={SingleMultidevice} className=" d-flex m-auto"></img>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.2em" },
            lineHeight: { xs: "1.6666666667em" },
            textAlign: "center",
            whiteSpace:"wrap" ,

            marginTop: "32px",
            marginBottom: "8px",
          }}
          className="w-100  "
        >
          Single and multiple devices
        </Typography>
        <Typography
          variant="body2"
          sx={{
            // paddingTop: { lg: "15%", sm: "8%", md: "20%", sm: "10%" },
            // paddingLeft: { xs: "0px" },
            // fontWeight: { xs: "400" },
            // textAlign: "center",
            paddingTop: "4%",
            fontWeight: "400",
            textAlign: "center",
            boxSizing:"border-box",
            width:{  xl:"267" , lg:"286px",md:"168px",sm:"318px",xs:"170px"}

          }}
        >
          Explore our library of mockups ranging from laptops and desktops to
          smartphones, in all operating systems. Plus, we've got responsive
          mockup sets and screens, too.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Btnbody2;
