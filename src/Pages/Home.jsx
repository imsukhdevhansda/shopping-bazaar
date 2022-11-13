import React from 'react'
import BannerImage from '../Components/Home-Components/BannerImage'
import OMGDeals from '../Components/Home_Components_for_Mobile/OMGDeals'
import BestBuys from '../Components/Home-Components/BestBuys'
import Brands from '../Components/Home-Components/Brands'
import ShopByCategory from '../Components/Home-Components/ShopByCategory'
import { Image } from '@chakra-ui/react'
import BannerSelectImages from '../Components/Home_Components_for_Mobile/BannerSelectImages'


const Home = () => {
  return (
    <>
    {/*Small Screen .... Mobile Screen Start*/}

    <BannerSelectImages/>
    {/*Small Screen .... Mobile Screen Start*/}

    <BannerImage/>
        <OMGDeals/>
   {/* //Best Buys Heading */} <Image w={'100%'} src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/db79460f-8020-49e8-8528-189507bce7a21668143245506-Budget-Buys--2-.jpg"/>
        <BestBuys/>
      {/* Brands Everyone Crushinig On */}  <Image w='100%' src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/de3859bd-ed72-4d90-9a93-70dd191dd5a51668144694278-Brands-Everyone---s-Crushing-On-.jpg"/>
        <Brands/>
        {/*Shop By Category */}<Image w='100%' src='https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/49039744-a61e-4220-a40a-e791ce77844f1668142162387-Shop-By-Category--1-.jpg'/>
        <ShopByCategory/>
        
    </>
  )
}

export default Home