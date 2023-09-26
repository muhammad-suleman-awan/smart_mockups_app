import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FacebookIcon from "@mui/icons-material/Facebook";
import React from "react";
import logoimg from "../../../assest/logo/logo.png";
import minilogo from "../../../assest/logo/Smartmockups_Logo_Symbol.png";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import bottomimage from "../../../assest/logo/bottom.jpg"
import fb from "../../../assest/logo/facbiik icons.jpg"

const product = [
  {
    productlabel1: "PRODUCT",
  },
  {
    productlabel2: "Features",
  },
  {
    productlabel3: "Create",
  },
  {
    productlabel4: "Customers",
  },
  {
    productlabel5: "Price",
  },
];

const leftbottomtext = [
  {
    img: logoimg,
  },
  {
    icon: "icons",
  },
  {
    msg: "smartMockups",
  },
  {
    piclog: "paypal",
  },
];

const otherdata = [
  { other: "OTHER" },
  {
    termmofUse: "Twems of Use",
  },
  {
    privacy: "Privacy policy",
  },
  {
    cookies: "Cookies Policy",
  },
  {
    license: "License",
  },
];

const help = [
  {
    title: "HELP",
  },
  {
    faq: "FAQs",
  },
  {
    knowledge: "Knowledge Hub",
  },
  {
    contact: "COntact",
  },
];

const BottomFooter = () => {
  return (
    <Grid
      container
      xl={12}
      lg={12}
      sx={{ marginTop: { xl: "8%", lg:"8%" }, paddingBottom: "150px" }}
    >
      <Grid item className="col-xl-6 col-lg-6 d-flex flex-column   position-relative ">
        <Box className="d-flex flex-column " style={{ position: " relative" }}>
          <img
            src={minilogo}
            width="50px"
            height="50px"
            style={{ position: "absolute", left: "220px", marginTop: "-5px" }}
          />
          <img
            src={logoimg}
            alt="Paris"
            width="200px"
            height="30px"
            style={{ position: "absolute", top: "10px", left: "230px" }}
          />
          <FormControl
            size="small"
            fulWidth
            sx={{
              width: { xl: "55%" },
              marginTop: { xl: "5%" },
              paddingLeft: { xl: "23%" },
              marginBottom: { xl: "10px" },
            }}
          >
            <InputLabel sx={{ paddingLeft: { xl: "60%" } }}>English</InputLabel>
            <Select className="rounded-pill">
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Box
              className="d-flex"
              sx={{ marginTop: { xl: "-10%" }, marginLeft: "110%" }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon /> 
            </Box>
          </FormControl>

          <Typography
            variant="body2"
            className="  d-flex text-center"
            sx={{
              marginLeft: { xl: "23%" },
              marginRight: { xl: "25%" },
              fontSize: "0.867rem",
              color: "rgb(167,167,167",
              lineHeight: "1.3",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            © Smartmockups s.r.o. - All rights reserved. All product names,
            logos, and brands are property of their respective owners.
          </Typography>
          <img src={bottomimage} style={{width:"40%",height:"18%", marginLeft:"22%", marginTop:"1%"}}></img>
        </Box>

        {/*   {leftbottomtext.map((lefticondetail, id) => (
          <div className=" mt-5">
            <smal className="justify-content-center d-flex ">
              {lefticondetail.icon}
            </smal>
            <icon className="justify-content-center d-flex">
              {lefticondetail.msg}
            </icon>
            <small className="justify-content-center d-flex">
              {lefticondetail.piclog}
            </small>
            <small className="justify-content-center d-flex"></small>
          </div>
        ))} */}
      </Grid>
      <Grid item className="col-xl-2 d-flex col-lg-2 flex-column" gap={2}>
        {product.map((prdname, index) => (
          <div className="d-flex flex-column" key={index}>
            <h5>{prdname.productlabel1}</h5>
            <small>{prdname.productlabel2}</small>
            <small>{prdname.productlabel3}</small>
            <small>{prdname.productlabel4}</small>
            <small>{prdname.productlabel5}</small>
          </div>
        ))}
      </Grid>

      <Grid item className="col-xl-2 col-lg-2 d-flex flex-column" gap={2}>
        {otherdata.map((otheerData, index) => (
          <div className="d-flex flex-column">
            <h5>{otheerData.other}</h5>
            <small>{otheerData.termmofUse}</small>
            <small>{otheerData.privacy}</small>
            <small>{otheerData.cookies}</small>
            <small>{otheerData.license}</small>
          </div>
        ))}
      </Grid>
      <Grid item className="d-flex flex-column col-lg-2 col-xl-2" gap={2}>
        {help.map((helpData, index) => (
          <div>
            <h5>{helpData.title}</h5>
            <small>{helpData.faq}</small>
            <small>{helpData.knowledge}</small>
            <small>{helpData.contact}</small>
          </div>
        ))}
      </Grid>
    </Grid>
  );
};

<></>;
export default BottomFooter;
