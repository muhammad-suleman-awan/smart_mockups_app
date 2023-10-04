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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      className="mb-5 d-flex justify-content-center"
      lg={12}
      px={2}
      sx={{
        marginTop: { xl: "8%", lg: "8%" },
        gap: { md: 0, sm: 1, xs: 2 },
        paddingLeft: { lg: "0%" },
        
      }}
    >
      <Grid
        item
        className=" d-flex flex-column       
  position-relative "
        sx={{
          order: { xs: 1, md: 0 },
        }}
        xl={6}
        lg={6}
        md={6}
        sm={12}
        xs={12}
      >
        <Box
          className="d-flex flex-column  "
          style={{ position: " relative" }}
          sx={{ marginTop: { lg: "0px", sm: "10%" } }}
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
              width: { xl: "55%", lg: "62%", md: "60%", sm: "60%", xs: "60%" },
              marginTop: { xl: "5%", lg: "8%", md: "8%", sm: "10%", xs: "30%" },
              paddingLeft: { xl: "23%", lg: "30%", md: "20%", sm: "20%" },
              marginBottom: { xl: "10px", lg: "10px" },
            }}
          >
             
            <Select className="rounded-pill d-flex justify-content-center" defaultValue={10}>
              <MenuItem value={10}  >English</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            <Box
              className="d-flex"
              sx={{
                marginTop: {
                  xl: "-10%",
                  lg: " -13%",
                  md: "-8%",
                  sm: "-12%",
                  xs: "-20%",
                },
                marginLeft: { sm: "110%", xs: "110%" },
              }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <YouTubeIcon />
            </Box>
          </FormControl>

          <Typography
            variant="body2"
            className="  d-flex text-center justify-center"
            sx={{
              marginLeft: { xl: "20%", md: "20%" },
              marginRight: { xl: "25%" },
              fontSize: "0.867rem",
              color: "rgb(167,167,167",
              lineHeight: "1.3",
              fontWeight: "500",
              textAlign: "center",
              width: { xl: "60%", md: "60%", sm: "90%" },
              paddingTop: { lg: "5%", md: "5%", sm: "10%", xs: "10%" },
            }}
          >
            © Smartmockups s.r.o. - All rights reserved. All product names,
            logos, and brands are property of their respective owners.
          </Typography>
          <img
            src={bottomimage}
            className="d-flex"
            style={{
              width: "40%",
              height: "18%",
              marginLeft: "30%",
              marginTop: "1%",
            }}
          ></img>
        </Box>
      </Grid>
      <Grid
        xl={2}
        lg={2}
        md={2}
        sm={3}
        xs={12}
        className="  d-flex flex-column   "
        gap={6}
      >
        <Accordion sx={{ display: { md: "none" } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>PRODUCT</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {product.map((prdname, index) => (
              <div className="d-flex flex-column gap-1">
              
                <small>{prdname.productlabel2}</small>
                <small>{prdname.productlabel3}</small>
                <small>{prdname.productlabel4}</small>
                <small>{prdname.productlabel5}</small>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>

        {product.map((prdname, index) => (
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            <h5>{prdname.productlabel1}</h5>
            <small>{prdname.productlabel2}</small>
            <small>{prdname.productlabel3}</small>
            <small>{prdname.productlabel4}</small>
            <small>{prdname.productlabel5}</small>
          </Typography>
        ))}
      </Grid>

      <Grid
        item
        className="  d-flex flex-column "
        gap={6}
        xl={2}
        lg={2}
        md={2}
        sm={3}
        xs={12}
      >
        <Accordion sx={{ display: { md: "none" } }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
          >
            <Typography>PRODUCT</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {otherdata.map((otheerData, index) => (
              <div className="d-flex flex-column  gap-1">
                <small>{otheerData.termmofUse}</small>
                <small>{otheerData.privacy}</small>
                <small>{otheerData.cookies}</small>
                <small>{otheerData.license}</small>
              </div>
            ))}{" "}
          </AccordionDetails>
        </Accordion>

        {otherdata.map((otheerData, index) => (
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            <h5>{otheerData.other}</h5>
            <small>{otheerData.termmofUse}</small>
            <small>{otheerData.privacy}</small>
            <small>{otheerData.cookies}</small>
            <small>{otheerData.license}</small>
          </Typography>
        ))}
      </Grid>
      <Grid
        item
        className="d-flex flex-column    "
        gap={6}
        xl={2}
        lg={2}
        md={2}
        sm={3}
        xs={12}
      >
        <Accordion sx={{ display: { md: "none" },
        
         }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography> HELP</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {help.map((helpData, index) => (
                <div className="d-flex flex-column gap-1" >
                  <small>{helpData.faq}</small>
                  <small>{helpData.knowledge}</small>
                  <small>{helpData.contact}</small>
                </div>
              ))}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {help.map((helpData, index) => (
          <Typography sx={{ display: { xs: "none", md: "block" } }}>
            <h5>{helpData.title}</h5>
            <small>{helpData.faq}</small>
            <small>{helpData.knowledge}</small>
            <small>{helpData.contact}</small>
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

<></>;
export default BottomFooter;
