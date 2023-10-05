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
          sx={{ marginTop: { lg: "0px", sm: "0%" } }}
        >
          {/* <imgListItem>
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
          </imgListItem> */}
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
            <Select
              className="rounded-pill d-flex justify-content-center"
              defaultValue={10}
            >
              <MenuItem value={10}>English</MenuItem>
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
          <div className=" d-flex pt-2 justify-content-center">
            <svg
              width={216}
              height={21}
              viewBox="0 0 214 20"
              className="Footer_footerLowerPayment__93dEm"
            >
              <defs>
                <path
                  id="PaymentsIcons_svg__a"
                  d="M0 0h19.441v19.355H0z"
                ></path>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <g fill-rule="nonzero">
                  <path
                    d="M160.23 2.51c-.754-.853-2.122-1.22-3.87-1.22h-5.071a.726.726 0 0 0-.718.608l-2.11 13.28c-.044.264.16.5.428.5h3.132l.787-4.946-.026.155a.724.724 0 0 1 .715-.608h1.49c2.921 0 5.21-1.177 5.88-4.583.022-.101.037-.198.052-.295.198-1.257 0-2.115-.689-2.89"
                    fill="#A7A7A7"
                    opacity="0.7"
                  ></path>
                  <path
                    d="M160.743 5.29c-.022.097-.033.194-.053.295-.682 3.405-3.014 4.581-5.99 4.581h-1.516a.734.734 0 0 0-.729.608l-.775 4.79-.221 1.357a.384.384 0 0 0 .383.437h2.69a.642.642 0 0 0 .638-.532l.027-.134.507-3.124.033-.172a.64.64 0 0 1 .637-.532h.403c2.604 0 4.644-1.028 5.24-4.008.25-1.243.119-2.282-.539-3.012a2.583 2.583 0 0 0-.735-.554"
                    fill="#C8C8C8"
                    opacity="0.5"
                  ></path>
                  <path
                    d="M198.859 5.29h-3.523a.49.49 0 0 0-.478.414l-1.414 9.032c-.022.177.109.339.283.339h1.805c.174 0 .304-.123.348-.289l.391-2.56a.49.49 0 0 1 .479-.414h1.109c2.305 0 3.653-1.124 3.98-3.348.173-.974.021-1.739-.436-2.275-.5-.588-1.391-.899-2.544-.899m.391 3.298c-.195 1.264-1.152 1.264-2.087 1.264h-.522l.37-2.36a.297.297 0 0 1 .282-.246h.261c.63 0 1.218 0 1.523.36.195.217.239.538.173.982M173.872 5.29h-3.501c-.24 0-.457.175-.479.414l-1.435 9.032a.3.3 0 0 0 .304.339h1.675a.49.49 0 0 0 .478-.413l.37-2.437a.49.49 0 0 1 .478-.413h1.11c2.305 0 3.653-1.124 4-3.348.153-.974 0-1.739-.456-2.275-.5-.588-1.37-.899-2.544-.899m.391 3.298c-.195 1.264-1.152 1.264-2.066 1.264h-.543l.37-2.36a.302.302 0 0 1 .304-.246h.24c.63 0 1.217 0 1.521.36.196.217.24.538.174.982m10.07-.039h-1.675a.28.28 0 0 0-.283.247l-.087.472-.109-.17c-.37-.532-1.174-.709-1.979-.709-1.848 0-3.436 1.413-3.74 3.392-.174.989.065 1.934.609 2.592.522.606 1.261.86 2.13.86 1.48 0 2.306-.967 2.306-.967l-.065.47c-.022.177.109.339.283.339h1.522a.49.49 0 0 0 .478-.413l.892-5.774c.043-.18-.109-.339-.283-.339m-2.327 3.283c-.174.964-.935 1.611-1.892 1.611-.5 0-.891-.16-1.13-.457-.262-.295-.349-.715-.262-1.183.153-.956.914-1.625 1.87-1.625.48 0 .87.16 1.132.462.239.302.347.726.282 1.192m27.314-3.283h-1.674a.28.28 0 0 0-.283.247l-.087.472-.109-.17c-.37-.532-1.174-.709-1.979-.709-1.87 0-3.436 1.413-3.74 3.392-.174.989.065 1.934.609 2.592.522.606 1.24.86 2.11.86 1.5 0 2.326-.967 2.326-.967l-.065.47c-.044.177.109.339.283.339h1.5c.24 0 .457-.175.5-.413l.892-5.774c.043-.18-.109-.339-.283-.339m-2.327 3.283c-.174.964-.935 1.611-1.913 1.611-.479 0-.87-.16-1.11-.457-.26-.295-.347-.715-.26-1.183.152-.956.913-1.625 1.87-1.625.478 0 .87.16 1.109.462.26.302.37.726.304 1.192M193.27 8.549h-1.696a.47.47 0 0 0-.392.214l-2.327 3.445-.978-3.311a.504.504 0 0 0-.479-.348h-1.652c-.196 0-.348.197-.283.387l1.87 5.48-1.761 2.478c-.13.195 0 .464.239.464h1.696a.476.476 0 0 0 .392-.21l5.61-8.14c.13-.194 0-.459-.239-.459m18.028-3.011l-1.435 9.198c-.022.177.109.339.283.339h1.457a.49.49 0 0 0 .478-.413l1.414-9.033c.021-.179-.109-.339-.283-.339h-1.631a.297.297 0 0 0-.283.248"
                    fill="#C8C8C8"
                  ></path>
                </g>
                <g fill-rule="nonzero">
                  <path
                    d="M128.727 12.336h1.85c.053 0 .176-.018.229-.018a.825.825 0 0 0 .652-.828c0-.422-.3-.74-.652-.827-.053-.018-.159-.018-.229-.018h-1.85v1.69z"
                    fill="#E8E8E8"
                  ></path>
                  <path
                    d="M130.951.645a3.206 3.206 0 0 0-3.206 3.205v3.328h4.527c.106 0 .23 0 .317.017 1.022.053 1.78.582 1.78 1.497 0 .722-.511 1.338-1.463 1.462v.035c1.04.07 1.833.651 1.833 1.55 0 .968-.881 1.602-2.044 1.602h-4.968v6.515h4.704a3.206 3.206 0 0 0 3.206-3.205V.645h-4.686z"
                    fill="#C8C8C8"
                  ></path>
                  <path
                    d="M131.229 9.42a.75.75 0 0 0-.652-.757c-.035 0-.123-.018-.176-.018h-1.674v1.55h1.674c.053 0 .158 0 .176-.018a.75.75 0 0 0 .652-.757z"
                    fill="#E8E8E8"
                  ></path>
                  <path
                    d="M112.951.645a3.206 3.206 0 0 0-3.206 3.205v7.906c.898.44 1.832.722 2.766.722 1.11 0 1.708-.67 1.708-1.585V7.16h2.749v3.716c0 1.443-.899 2.623-3.946 2.623-1.85 0-3.295-.405-3.295-.405v6.744h4.704a3.206 3.206 0 0 0 3.206-3.204V.645h-4.686zM121.933.645a3.206 3.206 0 0 0-3.206 3.205v4.19c.81-.686 2.22-1.126 4.492-1.02 1.216.052 2.52.387 2.52.387v1.356c-.652-.335-1.427-.634-2.431-.705-1.727-.123-2.766.722-2.766 2.201 0 1.497 1.04 2.342 2.766 2.201 1.004-.07 1.779-.387 2.43-.704v1.356s-1.285.334-2.519.387c-2.272.106-3.681-.334-4.492-1.021v7.395h4.704a3.206 3.206 0 0 0 3.206-3.204V.645h-4.704z"
                    fill="#C8C8C8"
                  ></path>
                </g>
                <g transform="translate(77.196)">
                  <img
                    width="19.441"
                    height="19.355"
                    xlinkHref="data:image/png;base64,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"
                  ></img>
                  <use fill="#C8C8C8" xlinkHref="#PaymentsIcons_svg__a"></use>
                </g>
                <path
                  d="M77.199 10.135h.92l.206-.5h.464l.207.5h1.807v-.381l.163.384h.937l.16-.39v.387h4.492v-.82h.088c.062 0 .08 0 .08.108v.71h2.324v-.191c.268.133.564.198.862.19h.979l.209-.5h.465l.206.5h1.882v-.471l.287.474h1.508V7h-1.493v.38l-.209-.372h-1.541v.371l-.191-.371h-2.066c-.31-.015-.619.048-.898.183v-.183h-1.44v.183a.894.894 0 0 0-.61-.183h-5.21l-.351.81-.36-.81h-1.644v.371l-.183-.371h-1.402l-.65 1.489.002 1.638zm17.76-.433h-.774l-1.02-1.685v1.685H92.07l-.196-.516h-1.118l-.201.516h-.625a1.134 1.134 0 0 1-.775-.258 1.125 1.125 0 0 1-.286-.86c-.025-.319.079-.635.289-.877a1.09 1.09 0 0 1 .816-.258h.516v.483h-.516a.517.517 0 0 0-.416.134.75.75 0 0 0-.155.516.774.774 0 0 0 .15.516c.105.086.24.126.374.114h.243l.756-1.768h.811l.912 2.126V7.444h.818l.945 1.566V7.444h.55l-.003 2.258zm-6.364-2.248v2.248h-.55V7.444l.55.01zm-.862.607a.635.635 0 0 1-.385.59c.102.04.191.106.258.192a.64.64 0 0 1 .09.41v.449h-.542v-.284a.658.658 0 0 0-.087-.436c-.078-.08-.197-.098-.39-.098h-.579v.818h-.537V7.444h1.237c.223-.022.447.016.65.108a.516.516 0 0 1 .272.498l.013.01zM85.2 9.7h-1.807V7.445H85.2v.47h-1.257v.402h1.226v.462h-1.226v.45H85.2v.474zm-2.197 0h-.56V7.935l-.775 1.768h-.472l-.775-1.763v1.763h-1.095l-.206-.5H78l-.205.5h-.583l.96-2.248h.8l.915 2.13v-2.14h.877l.703 1.525.648-1.525h.896l-.008 2.258zm8.685-.97l-.372-.892-.369.893h.741zm-4.647-.356a.53.53 0 0 1-.258.047h-.654v-.508h.661a.581.581 0 0 1 .259.038.212.212 0 0 1 .11.199.237.237 0 0 1-.11.217l-.008.007zm-8.1.349l-.369-.893-.366.893h.736zM87.814 12.194c0 .622-.465.754-.938.754h-.67v.76h-1.034l-.663-.742-.695.743h-2.13V11.45h2.164l.66.735.685-.735h1.717c.426 0 .906.119.906.74l-.002.003zm-4.273 1.03h-1.322v-.439h1.193v-.46h-1.18v-.407h1.347l.586.653-.624.653zm2.132.258l-.823-.916.823-.888v1.804zm1.232-1.01h-.697v-.554h.702c.194 0 .328.077.328.276s-.13.294-.333.294v-.015zm3.614-1.016h1.808v.467h-1.26v.408h1.229v.46h-1.23v.446h1.26v.472H90.52v-2.253zm-.679 1.205a.576.576 0 0 1 .258.189.648.648 0 0 1 .088.41v.449h-.54v-.29c0-.136.014-.335-.087-.438-.1-.103-.199-.1-.393-.1h-.575v.828h-.532V11.45H89.3c.221-.02.444.016.648.106a.516.516 0 0 1 .273.5.632.632 0 0 1-.38.599l-.002.005zm-.322-.284a.517.517 0 0 1-.259.047h-.653v-.516h.661a.542.542 0 0 1 .258.038c.074.041.117.12.111.204a.243.243 0 0 1-.11.214l-.008.013zm4.861.124c.118.13.176.303.16.478 0 .485-.302.71-.844.71h-1.048v-.47h1.032a.323.323 0 0 0 .222-.057.199.199 0 0 0 .062-.147.19.19 0 0 0-.064-.15.282.282 0 0 0-.191-.052c-.517-.015-1.134.016-1.134-.694 0-.325.204-.668.775-.668h1.08v.48h-.987a.375.375 0 0 0-.217.041.175.175 0 0 0-.08.163.17.17 0 0 0 .119.165c.067.02.137.029.206.026h.29c.22-.02.44.045.614.18l.005-.005zm2.14.906a.842.842 0 0 1-.715.302h-1.032v-.49h1.032a.313.313 0 0 0 .217-.057.196.196 0 0 0 .065-.147.188.188 0 0 0-.065-.15.282.282 0 0 0-.19-.052c-.517-.015-1.137.016-1.137-.694 0-.325.21-.668.775-.668h1.071v-.447h-.996a1.116 1.116 0 0 0-.674.186v-.186h-1.472a1.033 1.033 0 0 0-.643.186v-.186h-2.63v.186a1.402 1.402 0 0 0-.726-.186h-1.733v.186a1.224 1.224 0 0 0-.759-.186h-1.946l-.444.483-.416-.483h-2.905v3.138h2.84l.457-.487.432.487h1.75v-.738h.173c.254.017.51-.02.749-.108v.846h1.446v-.818h.07c.09 0 .097 0 .097.093v.725h4.39c.258.01.513-.059.73-.198v.198h1.394c.27.01.539-.04.788-.144l.007-.591zm0-1.484h-.973a.367.367 0 0 0-.214.041.178.178 0 0 0-.08.163.168.168 0 0 0 .119.165c.067.02.138.03.209.026h.289c.22-.02.438.045.612.18a.663.663 0 0 1 .049.057l-.01-.632z"
                  fill="#FFF"
                  fill-rule="nonzero"
                ></path>
                <g fill-rule="nonzero">
                  <path
                    d="M43.586 19.85v-1.276a.742.742 0 0 0-.787-.808.839.839 0 0 0-.724.361.745.745 0 0 0-.68-.361.724.724 0 0 0-.618.297v-.255h-.404v2.042h.404v-1.17a.476.476 0 0 1 .51-.531c.299 0 .469.191.469.531v1.17h.404v-1.17a.476.476 0 0 1 .51-.531c.299 0 .469.191.469.531v1.17h.447zm6.639-2.02h-.745v-.617h-.404v.616h-.426v.362h.426v.957c0 .468.17.745.68.745a1.19 1.19 0 0 0 .554-.15l-.128-.36a.7.7 0 0 1-.383.105.298.298 0 0 1-.319-.34v-.978h.745v-.34zm3.787-.064a.638.638 0 0 0-.553.297v-.255h-.404v2.042h.404v-1.148c0-.34.17-.553.447-.553.094.003.186.018.277.042l.127-.383a1.437 1.437 0 0 0-.298-.042zm-5.724.212a1.46 1.46 0 0 0-.83-.212c-.51 0-.83.234-.83.638 0 .34.235.531.682.595l.212.022c.234.042.383.127.383.234 0 .148-.17.255-.489.255a1.122 1.122 0 0 1-.68-.213l-.214.32c.259.17.563.259.873.254.596 0 .915-.276.915-.659s-.256-.532-.703-.596l-.212-.02c-.192-.022-.362-.086-.362-.214 0-.127.17-.255.404-.255.223.01.44.068.639.17l.212-.319zm6.193.851a1.004 1.004 0 0 0 1.063 1.064c.262.013.52-.07.724-.234l-.213-.32a.851.851 0 0 1-.532.192.683.683 0 0 1 0-1.361.851.851 0 0 1 .532.191l.213-.319a1.064 1.064 0 0 0-.724-.234.954.954 0 0 0-1.063 1.021zm-2.873-1.063c-.596 0-1 .425-1 1.063a1 1 0 0 0 1.042 1.064c.3.006.594-.092.83-.277l-.212-.298c-.171.133-.38.207-.596.213a.598.598 0 0 1-.617-.532h1.51v-.17c0-.638-.383-1.063-.957-1.063zm0 .383a.509.509 0 0 1 .532.51h-1.107a.547.547 0 0 1 .575-.51zm-5.511.68v-1.02h-.405v.254a.783.783 0 0 0-.66-.297 1.064 1.064 0 1 0 0 2.127.783.783 0 0 0 .66-.298v.255h.405v-1.02zm-1.66 0a.638.638 0 1 1 .638.68.626.626 0 0 1-.638-.68zm15.725-1.063a.638.638 0 0 0-.553.297v-.255h-.405v2.042h.405v-1.148c0-.34.17-.553.447-.553.093.003.186.018.276.042l.128-.383a1.437 1.437 0 0 0-.298-.042zm-1.575 1.063v-1.02h-.404v.254a.783.783 0 0 0-.66-.297 1.064 1.064 0 1 0 0 2.127.783.783 0 0 0 .66-.298v.255h.404v-1.02zm-1.638 0a.638.638 0 1 1 .638.68c-.404.022-.638-.297-.638-.68zm5.766 0V17h-.404v1.063a.783.783 0 0 0-.66-.297 1.064 1.064 0 1 0 0 2.127.783.783 0 0 0 .66-.298v.255h.404v-1.02zm-1.66 0a.638.638 0 1 1 .639.68.626.626 0 0 1-.638-.68z"
                    fill="#C8C8C8"
                  ></path>
                  <path
                    fill="#A7A7A7"
                    d="M48.373 2h7.384v12.038h-7.384z"
                  ></path>
                  <path
                    d="M48.853 7.657a7.677 7.677 0 0 1 2.915-6.02 7.663 7.663 0 0 0-9.082-.285 7.655 7.655 0 0 0 4.358 13.962 7.616 7.616 0 0 0 4.724-1.638 7.677 7.677 0 0 1-2.915-6.02z"
                    fill="#C8C8C8"
                  ></path>
                  <path
                    d="M63.757 7.648a7.657 7.657 0 0 1-4.31 6.878 7.663 7.663 0 0 1-8.074-.858 7.673 7.673 0 0 0 0-12.039 7.663 7.663 0 0 1 8.073-.858 7.657 7.657 0 0 1 4.31 6.877z"
                    fill="#C8C8C8"
                  ></path>
                </g>
                <g fill="#C8C8C8" fill-rule="nonzero">
                  <path d="M0 15.935h25.869v2.32H0zM0 1.935h25.869v2.32H0zM10.749 7.053l-2.673 6.368H6.328L5.017 8.33c-.084-.32-.151-.42-.387-.554A6.628 6.628 0 0 0 3 7.238l.034-.185H5.84c.38.002.7.28.756.655l.69 3.68L9 7.053h1.748zm6.841 4.284c0-1.68-2.32-1.78-2.303-2.52 0-.235.219-.47.706-.537a3.143 3.143 0 0 1 1.63.285l.286-1.344a4.301 4.301 0 0 0-1.546-.286c-1.63 0-2.774.874-2.79 2.1-.017.925.823 1.429 1.445 1.731.622.303.857.521.857.79 0 .42-.52.621-.991.621a3.383 3.383 0 0 1-1.698-.403l-.302 1.395a4.685 4.685 0 0 0 1.832.336c1.731.017 2.857-.84 2.874-2.168zm4.303 2.084h1.53l-1.328-6.368h-1.412a.751.751 0 0 0-.706.47l-2.488 5.898h1.731l.337-.958h2.117l.219.958zm-1.849-2.252l.874-2.385.504 2.385h-1.378zm-6.942-4.116l-1.361 6.368h-1.648l1.362-6.368h1.647z"></path>
                </g>
              </g>
            </svg>
            {/* <svg xmlns="http://www.w3.org/20/svg" viewBox="0 0 841.9 595.3">
              <g fill="#C8C8C8" fillRule="nonzero">
                <path d="M0 15.935h25.869v2.32H0zM0 1.935h25.869v2.32H0zM10.749 7.053l-2.673 6.368H6.328L5.017 8.33c-.084-.32-.151-.42-.387-.554A6.628 6.628 0 0 0 3 7.238l.034-.185H5.84c.38.002.7.28.756.655l.69 3.68L9 7.053h1.748zm6.841 4.284c0-1.68-2.32-1.78-2.303-2.52 0-.235.219-.47.706-.537a3.143 3.143 0 0 1 1.63.285l.286-1.344a4.301 4.301 0 0 0-1.546-.286c-1.63 0-2.774.874-2.79 2.1-.017.925.823 1.429 1.445 1.731.622.303.857.521.857.79 0 .42-.52.621-.991.621a3.383 3.383 0 0 1-1.698-.403l-.302 1.395a4.685 4.685 0 0 0 1.832.336c1.731.017 2.857-.84 2.874-2.168zm4.303 2.084h1.53l-1.328-6.368h-1.412a.751.751 0 0 0-.706.47l-2.488 5.898h1.731l.337-.958h2.117l.219.958zm-1.849-2.252l.874-2.385.504 2.385h-1.378zm-6.942-4.116l-1.361 6.368h-1.648l1.362-6.368h1.647z"></path>
              </g>
            </svg> */}
          </div>
        </Box>
       
      </Grid>
      <Grid
        xl={2}
        lg={2}
        md={2}
        sm={3}
        xs={12}
        className="  d-flex flex-column   "
        gap={2}
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
        gap={2}
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
        gap={2}
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
            id="panel1a-header"
          >
            <Typography> HELP</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {help.map((helpData, index) => (
                <div className="d-flex flex-column gap-1">
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
