import {
  Box,
  FormControl,
  FormHelperText,
  Grid,
  ImageListItem,
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
import bottomimage from "../../../assest/logo/bottom.jpg";
import fb from "../../../assest/logo/facbiik icons.jpg";

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
    className="mb-5"
      lg={12}
      sx={{ marginTop: { xl: "8%", lg: "8%" }, 
      
      paddingLeft:{lg:"0%",sm:"15%", xs:"5%"}
         }}
   
    >
      <Grid
        item
        className=" d-flex flex-column       
  position-relative "
        sx={{
          order: { xs: 1, lg: 0 }, 

        }}
        xl={6}
        lg={6}
        md={12}
        sm={12}
        xs={12}
      >
        <Box className="d-flex flex-column  " style={{ position: " relative" }}
          sx={{marginTop:{lg:"0px", sm:"10%"}}}
        >
        {/* <ImageListItem>
          <img
            src={minilogo}
            width="2%" 
            height="20px"
            // style={{ position: "absolute", left: "220px", marginTop: "-5px" }}
              
          />
          <img
            src={logoimg}
            alt="Paris"
            width="200px"
            height="30px"
            // style={{ position: "absolute", top: "10px", left: "230px" }}
          />
          </ImageListItem> */}
                    <FormControl
            size="small"
            fulWidth
            sx={{
              width: { xl: "55%", lg: "62%", md:"60%", sm:"60%", xs:"60%" },
              marginTop: { xl: "5%", lg: "8%", md:"8%", sm:"10%", xs:"30%" },
              paddingLeft: { xl: "23%", lg: "30%", md:"20%", sm:"20%" },
              marginBottom: { xl: "10px", lg: "10px" },
            }}
          >
            <InputLabel sx={{ paddingLeft: { xl: "60%", lg: "60%", md:"60%", sm:"70%", xs:"20%" } }}>
              English
            </InputLabel>
            <Select className="rounded-pill">
              <MenuItem value={10}>English</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Box
              className="d-flex"
              sx={{
                marginTop: { xl: "-10%", lg: " -13%", md:"-8%", sm:"-12%",xs:"-20%" },
                marginLeft: {sm:"110%", xs:"110%"},
              }}
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
              marginLeft: { xl: "20%", md:"20%", },
              marginRight: { xl: "25%" },
              fontSize: "0.867rem",
              color: "rgb(167,167,167",
              lineHeight: "1.3",
              fontWeight: "500",
              textAlign: "center",
              width: { xl: "60%", md: "60%", sm:"90%" },
              paddingTop: { lg: "5%",md:"5%", sm:"5%",xs:"10%" },
            }}
          >
            © Smartmockups s.r.o. - All rights reserved. All product names,
            logos, and brands are property of their respective owners.
          </Typography>
          <img
            src={bottomimage}
            style={{
              width: "40%",
              height: "18%",
              marginLeft: "22%",
              marginTop: "1%",
            }}
          ></img>
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
      <Grid
       xl={2}
       lg={2}
       md={4}
       sm={4}
       xs={4}
       className="  d-flex flex-column "
        gap={6}
      >
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

      <Grid
        item
        className="  d-flex flex-column"
        gap={6}
       xl={2}
       lg={2}
       md={4}
       sm={4}
       xs={4}

      >
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
      <Grid
        item
        className="d-flex flex-column    "
        gap={6}
        xl={2}
        lg={2}
        md={4}
        sm={4}
        xs={4}
      >
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
