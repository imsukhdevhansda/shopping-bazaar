import { Box, Image, LinkBox } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const BannerImage = () => {
    const prodImages = [
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/7746b0d0-274c-443f-a5e5-0b493acddef61668147642103-Men-Page_DK_02.jpg",
        },
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/4d8e42de-57ae-4e2f-bd8f-00d672d4d7341668147642110-Men-Page_DK_03.jpg",
        },
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/d634828e-59af-49cb-8034-357e6d8902391668147642119-Men-Page_DK_04.jpg",
        },
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/0235769e-a654-4426-bdc0-18a731e5681e1668147642126-Men-Page_DK_05.jpg",
        },       
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/83be589a-d7ce-4384-942d-fed10626624c1668147642134-Men-Page_DK_06.jpg",
        },
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/48942951-ad36-4ae9-9470-876e41adbca61668147642142-Men-Page_DK_07.jpg",
        },
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/d59ec7f3-47e3-43e4-a545-865deaafcd7a1668147642153-Men-Page_DK_08.jpg",
        },
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/02967668-ccd3-437d-9930-7fcc99845b261668147642160-Men-Page_DK_09.jpg",
        },
        {
          img: "https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/920d137c-85c1-4443-86b9-6777fd122c9e1668147642168-Men-Page_DK_10.jpg",
        },
        {
            img:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/02ef6b6b-f4ca-4487-82e6-217559dc84c61668147642177-Men-Page_DK_11.jpg"
        },
        {
            img:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/c2ab23c4-ed55-4b51-97a9-df0de3cf7c2d1668147642186-Men-Page_DK_12.jpg"
        },
        {
            img:"https://assets.myntassets.com/w_245,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/807182c7-c2d4-402b-8f71-f39d032757d91668147642198-Men-Page_DK_13.jpg"
        }
      ];
  return (
    <>
    <LinkBox>
    <Box
        // backgroundImage="url('')"
        maxW={"100%"}
        maxh={"500px"}
        m={"25px 0 "}
        display={"grid"}
        gap=""
        gridTemplateColumns={'repeat(4,1fr)'}
        // gridTemplateRows={'repeat(1,1fr)'}
        
      >
        {prodImages.map((imag) => {
          return (            
              <Image width={"100%"} key={prodImages} src={imag.img} />
          );
        })}
      </Box>
      </LinkBox>
      <LinkBox maxW={'100%'} p='0'>
      <Image width={'100%'} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/11c16415-1196-4bac-a667-ed7286a00e0f1668143055672-OMG-Deals--1-.jpg"/>
      </LinkBox>
        
    </>
  )
}

export default BannerImage