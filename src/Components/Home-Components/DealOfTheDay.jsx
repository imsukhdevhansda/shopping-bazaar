import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const DealOfTheDay = () => {
  const prodImages = [
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/5f89f6b9-512a-4374-89ed-3f0bd9cf2d651668065496752-Ext_300--5-.jpg",
    },
  ];
  return (
    <>
      <Heading> Deals of the day</Heading>
      <Box
        backgroundImage="url('')"
        maxW={"100%"}
        maxh={"300px"}
        p={"20px 0"}
        gap={"4px"}
        display={"flex"}
        border={"solid 1px red"}
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

export default DealOfTheDay;
