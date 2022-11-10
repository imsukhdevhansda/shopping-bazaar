import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import {  FiPhone } from 'react-icons/fi'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Box, Input, Image, Flex, Button } from "@chakra-ui/react";

const OTPpage = () => {

    const [value, setValue] = useState("");
  return (
    <div style={{marginTop:"150px"}}>
    <Flex h="100vh" alignItems="center" justifyContent="center" >
      <Box
        w="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gap="4"
        borderWidth="1px"
        color="white"
      >
        <Image
          src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/2127ba0a-fa66-43de-83ca-367322d814061662403347124-offer-banner-200-1080x496-code-_-MYNTRA200.jpg"
          alt="Dan Abramov"
        />
        <Input w="90%" placeholder="Username"  color="black" size="sm" />
        <PhoneInput
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true
        }}
        masks={{ uy: ".. ... ...", py: "... ......" }}
        autoFocus={true}
        country="in"
        countryCodeEditable={false}
        placeholder="phone"
        onChange={setValue}
        containerStyle={{
            width: "100%",
        }}
        buttonStyle={{ 
            width: "15%",
            marginLeft: "20px",
            borderRadius:"0",
            height:"32px",
            // color:"black"
        }}
        searchStyle={{ 
            marginLeft: "0",
            padding:"0",
            // color:"black"
        }}
        inputStyle={{
            width: "75%",
            marginLeft: "50px",
            borderRadius:"0",
            height:"32px",
            textAlign:"left",
            color:"black"

        }}
      />
        <Button borderRadius="0" mb="-5px" pt="18px" pr="90px" pb="18px" pl="90px" size="sm" bg="red.400" fontSize="sm">
          Sign up
        </Button>

        <Button  borderRadius="0" mb="-5px" pt="18px" pr="60px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="60px" size="sm" leftIcon={< FiPhone />}>
           Phone Login 
        </Button>
        <Button  borderRadius="0" mb="25px" pt="18px" pr="75px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="75px" size="sm" leftIcon={< FcGoogle />}>
            Google
        </Button>
      </Box>
    </Flex>
  </div>
  )
}

export default OTPpage