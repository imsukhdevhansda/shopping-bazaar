import { Box, Image, LinkBox } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const ShopByCategory = () => {
    const prodImages = [
        {
          img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/db84a799-bb2d-47d4-9315-b66f748b887f1667989192324-Shop-By-Category_Men_02.jpg",
        },
        {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/7b1ca01e-280a-41fb-8cba-f6781ddfcc861667989192332-Shop-By-Category_Men_03.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/5bb42d27-5fe2-45fa-ba25-70d3771b79741667989192339-Shop-By-Category_Men_04.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/51c43872-05bb-4fbb-844a-fcd8b4dc1b011667989192345-Shop-By-Category_Men_05.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/dc9eef31-3399-47f8-a518-bfad13ace95b1667989192352-Shop-By-Category_Men_06.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/0439a660-0ffb-4f04-9c3a-fe1747a7918b1667989192359-Shop-By-Category_Men_07.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/4cdd2226-fb2b-4a32-a2de-728ec8d77b2f1667989192367-Shop-By-Category_Men_08.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/24d4a46e-c281-434f-a0ff-e74806cd99b11667989192373-Shop-By-Category_Men_09.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/cfe56220-7c6d-4a56-8ba1-71c401eb5f6f1667989192380-Shop-By-Category_Men_10.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/f84d1af1-4031-4b6d-92cc-1b41fa489bfa1667989192387-Shop-By-Category_Men_11.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/b2110f4b-7334-4eb8-b946-4404a115af711667989192393-Shop-By-Category_Men_12.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/12d52507-81cd-4e54-86d0-8c157ac045fe1667989192401-Shop-By-Category_Men_13.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/2d9b17df-cffc-4465-bf6e-7c2d93cc30081667989192408-Shop-By-Category_Men_14.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/fb33c1e6-a45d-446d-951c-aab41f4a70a41667989192415-Shop-By-Category_Men_15.jpg",
          },
          {
            img: "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/24c2a50b-fc09-4393-8c9f-df617dbbbb041667989192422-Shop-By-Category_Men_16.jpg",
          },
          {
            img:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/41879cfb-957e-4205-a43e-f9061563cee11667989192429-Shop-By-Category_Men_17.jpg"
          },
          {
            img:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/4dc57bcd-7ac2-467a-adc1-4361f864784a1667989192436-Shop-By-Category_Men_18.jpg"
          },
          {
            img:"https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/9/b8abc0fb-1a9e-4927-851a-eb097ea263c81667989192443-Shop-By-Category_Men_19.jpg"
          }, 
      ];
  return (
    <>
    <LinkBox>
    <Box
        // backgroundImage="url('')"
        maxW={"100%"}
        maxh={"auto"}
        m={"2px 0 "}
        display={"grid"}
        gap=""
        gridTemplateColumns={'repeat(6,1fr)'}
        // gridTemplateRows={'repeat(1,1fr)'}
        
      >
        {prodImages.map((imag,index) => {
          return (            
             index <=18 && <Image width={"100%"} key={prodImages} src={imag.img} />
          );
        })}
      </Box>
      </LinkBox>
    
        
    </>
  )
}

export default ShopByCategory