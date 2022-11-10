import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import {  FiPhone } from 'react-icons/fi'
import { Box, Input, Image, Flex, Button, Text } from "@chakra-ui/react";

const Login = () => {
  return (
    <div>
      <Flex h="100vh" alignItems="center" justifyContent="center" mt="90px">
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
          <Input w="90%" placeholder="Email" color="black" size="sm" />
          <Input w="90%" placeholder="Password" color="black" size="sm" />
          <Button borderRadius="0" mb="-5px" pt="18px" pr="95px" pb="18px" pl="95px" size="sm" bg="red.400" fontSize="sm">
            Login
          </Button>
          <Button  borderRadius="0" mb="-5px" pt="18px" pr="60px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="60px" size="sm" leftIcon={< FiPhone />}>
             Phone Login 
          </Button>
          <Button  borderRadius="0" pt="18px" pr="75px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="75px" size="sm" leftIcon={< FcGoogle />}>
              Google
          </Button>
          <Text color="rgba(0, 0, 0, 0.50)">------------------- or --------------------</Text>        
          <Text fontSize='md' color="black" >New to Myntra ?</Text>
          <Button  borderRadius="0" mb="25px" pt="18px" pr="40px" pb="18px" bg="red.400" fontSize="sm"  pl="40px" size="sm">
              CREATE NEW ACCOUNT
          </Button>
        </Box>
      </Flex>
    </div>
  )
}

export default Login;
