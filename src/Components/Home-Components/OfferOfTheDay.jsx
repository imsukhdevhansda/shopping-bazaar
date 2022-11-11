import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

const OfferOfTheDay = () => {
  const prodImages = [
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img:"https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
    {
      img: "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg",
    },
  ];
  return (
    <>
      <Heading> Offer of the day</Heading>
      <Box
        backgroundImage="url('')"
        maxW={"100%"}
        maxh={"300px"}
        p={"20px 0"}
      
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

export default OfferOfTheDay;
