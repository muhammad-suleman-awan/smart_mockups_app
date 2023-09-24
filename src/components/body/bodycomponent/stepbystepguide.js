import Grid from "@mui/material/Grid";
import React from "react";
import Availablemockupimg1 from "../../../assest/images/avaiab1mkup.png";
import Availablemockupimg2 from "../../../assest/images/available2mkup.png";
import Availablemockupimg3 from "../../../assest/images/availablemkup3.png";
import { Button } from "bootstrap";
import { dataforstep, appname } from "./data";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
const Guidemockup = () => {
  return (
    <Grid
      container
      xl={12}
      justifyContent={"center"}
      mt={5}
      clas
      sx={{ marginTop: { xl: "120px" } }}
    >
      <Grid item className=" col-xl-8    ">
        <Typography
          className="col-xl-12 d-flex justify-content-center"
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
          sx={{ marginBottom: { xl: "40px" },fontSize: {xl:'2.4em'},lineHeight:{xl:"1.333333333em"},
          fontWeight:{xl:"700"} }}
          
        >
          Three easy steps to your first mockup
        </Typography>
      </Grid>
      <Grid item className="col-xl-8 d-flex  ">
        <ImageList className="  d-flex" gap={100}>
          {dataforstep.map((data, index) => (
            <ImageListItem
              key={index}
              sx={{ width: { xl: "25%" }, height: { xl: "20%" } }}
            >
              <img src={data.image} />
              <Typography
                sx={{
                  marginTop: "32px",
                  marginBottom: "16px",
                  fontSize: " 1.3333333333em",
                  lineHeight: "1.6em",
                  fontWeight: "500",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                }}
              >
                {data.titleimage}
              </Typography>
              <Typography
                variant="p"
                sx={{
                  marginTop: "32px",
                  marginBottom: "16px",
                  fontSize: " 1.0666666667em",
                  lineHeight: "1.625em",
                  fontWeight: "400",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                  marginTop: "0",
                }}
              >
                {data.descriptionimage}
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
