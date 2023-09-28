import Grid from "@mui/material/Grid";
import React from "react";
import Availablemockupimg1 from "../../../assest/images/avaiab1mkup.png";
import Availablemockupimg2 from "../../../assest/images/available2mkup.png";
import Availablemockupimg3 from "../../../assest/images/availablemkup3.png";
import { Button } from "bootstrap";
import { dataforstep, appname } from "./data";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
const Guidemockup = () => {
  return (
    <Grid
      container
      lg={12}
      sm={12}
      justifyContent={"center"}
      mt={5}
      sx={{}}
    >
      <Grid item className=" col-xl-8   col-lg-8 ">
        <Typography
          className="col-xl-12 pt-5 d-flex justify-content-center"
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
          YOUR STEP-BY-STEP GUIDE
        </Typography>
        <Typography
          className="col-xl-12 d-flex justify-content-center"
          sx={{
            marginBottom: { xl: "80px" },
            fontSize: { xl: "2.4em" },
            lineHeight: { xl: "1.333333333em" },
            fontWeight: { xl: "700" },
          }}
        >
          Three easy steps to your first mockup
        </Typography>
      </Grid>

      <Grid
        item
        className="d-flex justify-items-center justify-content-center px-5  "
        gap={{ xl: 20, lg: 5, md: 12, sm: 8, xs: 35 }}
        xl={8}
        lg={8}
        md={12}
        sm={12}
        xs={12}
        flexDirection={{ xs: "column", sm: "row" }}
        p
      >
        <Grid
          containerm
          gap={5}
          // spacing={2}
          className="d-flex justify-content-around"
          sx={{
            flexDirection:{sm:"row", xs:"column"}
          }}
        >
          {dataforstep.map((data, index) => (
            <Grid
              item
              xl={3}
              lg={3}
              md={3}
              sm={3}
              xs={12}
             
            >
              <ImageListItem
                key={index}
                sx={{
                  maxWidth: "100%",
                }}
              >
                <img
                  style={
                    {
                      //   width:"250px",
                      //   height:"240px",
                      // flexGrow: "0",
                    }
                  }
                  src={data.image}
                />
              </ImageListItem>
              <Typography
                variant="h3"
                sx={{
                  marginTop: "32px",
                  marginBottom: "16px",
                  fontSize: " 1.3333333333em",
                  lineHeight: "1.6em",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                  textAlign: "left",
                }}
              >
                {data.titleimage}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: " 1em",
                  fontWeight: "400",

                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                  boxSizing: "borderBox",
                  textAlign: "left",
                }}
              >
                {data.descriptionimage}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Guidemockup;

// const Guidemockup = () => {
//   return (
//     <Grid container xl={12} justifyContent={"center"} mt={5} clas >
//       <Grid item className=" col-xl-8    ">
//         <div className="d-flex justify-content-center flex-column">
//           <div className="col-xl-12 d-flex justify-content-center">
//             <span>YOUR STEP-BY-STEP GUIDE</span>
//           </div>
//           <div className="col-xl-12 d-flex justify-content-center">
//             <h2>Three easy steps to your first mockup</h2>
//           </div>
//         </div>
//       </Grid>
//       <Grid item className="col-xl-8 d-flex flex-row   gap-2 ">
//          <div className=" col-xl-3">
//           <div className="d-flex justify-content-center flex-column">
//             <img src={Availablemockupimg1} height={380}></img>
//             <h4>1. Find your favorite website mockup</h4>
//             <p>
//               Open Smartmockups and discover an ever-growing selection of device
//               photos and 3D renders, in all operating systems.
//             </p>
//           </div>
//         </div>
//         <div className="  col-xl-4">
//           <div>
//              <img src={Availablemockupimg2} height={380}></img>
//             <h4>2. Upload your design and customize the mockup</h4>
//             <p>
//               Upload your design to the mockup and with one click you’ll get an
//               instant preview. Our design tools will give your mockup some extra
//               brilliance.
//             </p>
//           </div>
//         </div>
//         <div className="  col-xl-4">
//           <div>
//              <img src={Availablemockupimg3} height={380}></img>
//             <h4>3. Download the final image</h4>
//             <p>
//               Once you’ve completed your mockup, download to save it.
//               Congratulations on your first website presentation mockup.
//             </p>
//           </div>

//         </div>
//       </Grid>
//     </Grid>
//   );
// };

// export default Guidemockup;
