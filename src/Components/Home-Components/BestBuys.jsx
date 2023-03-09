import React from "react";
import "./BestBuy.css";
import { Box, Heading, Image } from "@chakra-ui/react";

const BestBuys = () => {
  const prodImages = [
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/53a8bb8e-fe35-43ba-a8ec-1e85882b88d91667206790309-Innerwear.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/78b92187-7e50-4a56-9c09-3017476550d11667206671012-Ethnic-Wear.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/68c96860-5a3d-4a25-af22-3b279536669b1667207041117-Loungewear.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/ecb964f3-24dd-489c-b0f4-7ef64a3c20901667207189928-T-Shirts.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/492de114-69be-4c8f-87b6-7248e87a62e51667206524802-Casual-Shirts.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/368edeaf-d1ac-4559-a9cf-8fe9343239861667206790322-Jeans-1.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/235fcf45-15a3-40d3-8080-7f43b8e12c131667206671046-Formal-Shirts.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/f4429388-8d94-40cd-bd00-4440b21875a81667207041184-Suits-_-Blazers.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/736bdc4d-f631-4b37-8c56-d772e4c52e381667207189916-Trousers.jpg",
    },
    {
      img: "https://assets.myntassets.com/w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/6c0fa1d9-14aa-483d-8720-93924df13bd61667207041144-Sandals.jpg",
    },
  ];
  return (
    <>
      <Box
        p={"0 10px"}
        backgroundImage="url('')"
        maxW={"100%"}
        maxh={"300px"}
        m={"20px 0"}
        display={"grid"}
        gap="10px"
        gridTemplateColumns="repeat(5,1fr)"
      >
        {prodImages.map((imag, id) => {
          return (
            <Box key={id}>
              <Image width={"100%"} key={prodImages} src={imag.img} />
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default BestBuys;
