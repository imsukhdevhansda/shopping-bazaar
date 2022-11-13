import React from "react";

import { Box, Heading, Image, LinkBox } from "@chakra-ui/react";


const OMGDeals = () => {
  const prodImages = [
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/6/dcad3b7e-53d4-40f6-9181-894d45acc0b21667713818009-unnamed--79-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/e49b5bfb-6ca0-4f65-8d65-43a0319a3e0b1667201891583-Virat-s_Favourite_picks_Min_50_Off-_Wrogn.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/57ce2a16-c65c-416a-9767-03e572261a8f1667199618110-Tshirts_Starting_199_-499-_M-H-_Moda_-_More.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/6/e45a277a-a34a-494f-abb1-c07595c910161667713840050-unnamed--80-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/10ad56fb-c29e-49c2-a3f0-7664bae4e0ff1667199617983-Shirts_Min_60-_M-H-_H-N_-_More.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/6/34860fd1-6c1b-404e-92c2-f433981773061667713861456-unnamed--81-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/18967df5-7a2a-4add-bf09-cca470a7a1e51667213785388-Top_casual_Styles-_Levi-s-_Tommy_Min_40.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/170aef3b-7844-46fd-bf13-ae28fa600c851667199618163-USPA-_FM_Min_60.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/32b140b5-d901-4911-9a74-6625a9de8e3a1667199617622-JJ-_Highlander_Min_60.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/a20d9451-2939-46bb-af90-8795d329b73e1667199617510-Gant-_Nautica_Min_50.jpg",
    },
  ];
  return (
    <>
     
      <Box className="omgImages"
      maxW={"100%"}
      maxh={""}
      m={"20px 0"}
      display={"grid"}
      gap='10px'
      gridTemplateColumns='repeat(5,1fr)'     
      >
        {prodImages.map((imag) => {
          return (
            <Box>
              <Image width={"100%"} key={prodImages} src={imag.img} />
            </Box>
          );
        })}
      </Box>
      
    </>
  );
};

export default OMGDeals;
