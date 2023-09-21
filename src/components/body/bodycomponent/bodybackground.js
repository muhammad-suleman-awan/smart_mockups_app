import React from "react";
import images from "../../../assest/images/Header_Websites.png";
import Button from "@mui/material/Button";

const Bodybackground = ({ data }) => {
  console.log('data', data)
  return (
    <div className="row py-5 d-flex justify-content-center  m-0 col-xl-12 col-lg-10 col-sm-1">
       
      <div className="col-xl-10 col-sm-4    ">
        <div
          className=""
          style={{
            backgroundImage: `url("${images}")`,
            backgroundRepeat: "round",
            height: "500px",
          }}
        >
          
         

          <div className="d-flex flex-column col-xl-12 px-5 pt-5  " style={{}}>
  

          
              <div key={indexedDB} >
              <h5 className={data.styleToprow}>
                {data.topRow}
            </h5>
     
            <p className={data.styleMiddleRow}>
              {data.middleRow}
            </p>
            </div>

            <Button variant="outlined" className={data.styleEndRowbtn}>
                {data.endRowBtn}
            </Button>
            
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodybackground;
