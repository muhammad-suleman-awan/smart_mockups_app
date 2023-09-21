import { Grid } from "@mui/material";
import React from "react";
import logoimg from "../../../assest/logo/logo.png";
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
    <Grid container xl={12} height={600}>
      <Grid item className="col-xl-6 d-flex flex-column  ">
        <div className="" style={{ position: " relative" }}>
          <img
            src={logoimg}
            alt="Paris"
            width="300"
            height="100"
            style={{ position: "absolute", top: "0px", left: "560px" }}
          />
        </div>
        {leftbottomtext.map((lefticondetail, id) => (
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
        ))}
      </Grid>
      <Grid item className="col-xl-2 d-flex flex-column">
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

      <Grid item className="col-xl-2 d-flex flex-column">
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
      <Grid item className="d-flex flex-column col-xl-2">
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
