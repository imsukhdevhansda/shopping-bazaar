import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import {  FiPhone } from 'react-icons/fi'
import { loginsuccess } from '../../Redux/AuthReducer/action';
import {useDispatch, useSelector} from "react-redux"
import { ChakraProvider } from '@chakra-ui/react';
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { Box, Input, Image, Flex, Button, Text } from "@chakra-ui/react";
import { collection } from "@firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig"; 
// import { useCollectionData } from 'react-firebase-hooks/firestore';

const Login = () => {


  const dispatch =useDispatch()

  const  userId =useSelector((store)=>{
    return store.AuthReducer.userId  
  })

  
  const auth = getAuth();
  const Googleprovider = new GoogleAuthProvider();

  const [data, setdata] = useState({});

  const handleGooglelogin = () => {
    signInWithPopup(auth, Googleprovider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        alert(err.message);
      });
  };



  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };

    console.log(event.target.value);
    setdata({ ...data, ...input });
  };



  const handleSubmit = () => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const {displayName, uid} = userCredential.user;
        console.log(displayName, uid);
        const query = doc(db,"users", `${uid}`)
        getDoc(query)
        .then((res)=> {
          const {address, locality, pincode, bag, phone, wishlist}={
              address:res._document.data.value.mapValue.fields.address.mapValue.fields.address.stringValue,
              locality:res._document.data.value.mapValue.fields.address.mapValue.fields.locality.stringValue,
              pincode:res._document.data.value.mapValue.fields.address.mapValue.fields.pincode.integerValue,
              bag:res._document.data.value.mapValue.fields.bag.arrayValue.values,
              phone:res._document.data.value.mapValue.fields.phone.stringValue,
              wishlist:res._document.data.value.mapValue.fields.wishlist.arrayValue.values,

          }

          console.log(address, locality, pincode, bag, phone, wishlist)
          dispatch(loginsuccess({displayName, uid, address, locality, pincode, bag, phone, wishlist }))
        })
        
        .catch((err)=> alert(err))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Sign-in Failed : ${errorMessage}`);
      });
  };

  return (
    <ChakraProvider>
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
          <Input w="90%" placeholder="Email" name="email" onChange={handleInput} color="black" size="sm" />
          <Input w="90%" placeholder="Password" name="password" onChange={handleInput} color="black" size="sm" />
          <Button onClick={handleSubmit} borderRadius="0" mb="-5px" pt="18px" pr="95px" pb="18px" pl="95px" size="sm" bg="red.400" fontSize="sm">
            Login
          </Button>
          <Button  borderRadius="0" mb="-5px" pt="18px" pr="60px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="60px" size="sm" leftIcon={< FiPhone />}>
             Phone Login 
          </Button>
          <Button onClick={handleGooglelogin} borderRadius="0" pt="18px" pr="75px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="75px" size="sm" leftIcon={< FcGoogle />}>
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
    </ChakraProvider>
  )
}

export default Login;
