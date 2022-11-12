import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import {  FiPhone } from 'react-icons/fi'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { app, db } from "../../config/firebaseConfig"
import { doc, setDoc } from "firebase/firestore";
import { Box, Input, Image, Flex, Button, HStack, PinInput, PinInputField } from "@chakra-ui/react";
import {
    getAuth,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    updateProfile
  } from "firebase/auth";


const PhoneLogin = () => {

    const auth = getAuth();
    const user = auth.currentUser;
  
    const [err, seterr] = useState("");
    const [data, setdata] = useState({});
    const [value, setValue] = useState("");
    const [otpsec, setotpsec] = useState(false);
    const [OTP, setOTP] = useState("");
  
    const handleInput = (event) => {
      let input = { [event.target.name]: event.target.value };
      setdata({ ...data, ...input });
    };
  
    const genrateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {}
        },
        auth
      );
    };


    const handleSubmit = () => {
      if (value === "" || value === undefined || value.length < 12)
        return seterr("invalid phone No.");
      genrateRecaptcha();
      const AppVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, `+${value}`, AppVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          setotpsec(true);
        })
        .catch((error) => {
          alert("Error SMS not sent please try again" + `${error}`);
        });
    };


    const checkotp=()=>{
   
      if (OTP.length === 6) {
        console.log(OTP);
        let confirmationResult = window.confirmationResult;
        confirmationResult
          .confirm(OTP)
          .then((res) => {
            const user = res.user;
            console.log(res);
            updateProfile(auth.currentUser, {
              displayName: data.username
            });
            const docData={
              address:[],
              wishlist:[],
              bag:[],
              phone:res.user.phoneNumber
            }
           setDoc(doc(db, "users", `${res.user.uid}`), docData);

          })
          .catch((error) => {
            alert(error);
          });
      }

    }
  

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
          src={otpsec? "https://constant.myntassets.com/pwa/assets/img/al_banner.png":"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/9/6/2127ba0a-fa66-43de-83ca-367322d814061662403347124-offer-banner-200-1080x496-code-_-MYNTRA200.jpg"}
          alt="Dan Abramov"
          w={otpsec? "90%":"100%"}
        />
        <Input w="90%" placeholder="Username" name="username" onChange={handleInput}  color="black" size="sm" />
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
      {/* value="" onComplete={handleComplete} */}
      {otpsec? (<Box><HStack color="black" mb="3">
         <PinInput size='sm' type="number" placeholder="•" onChange={(e)=> setOTP(e)} >
              <PinInputField  />
              <PinInputField  />
              <PinInputField  />
              <PinInputField  />
              <PinInputField  />
              <PinInputField  />
         </PinInput>
         </HStack>
         <Button onClick={ checkotp } borderRadius="0" mb="-5px" pt="18px" pr="82px" pb="18px" pl="82px" size="sm" bg="red.400" fontSize="sm">
          Verify OTP
        </Button>
         </Box>):(<Box></Box>)
      }
        
        <Button onClick={ handleSubmit } borderRadius="0" mb="-5px" pt="18px" pr="90px" pb="18px" pl="90px" size="sm" bg="red.400" fontSize="sm">
          Get OTP
        </Button>
        


        <Button  borderRadius="0" mb="-5px" pt="18px" pr="60px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="60px" size="sm" leftIcon={< FiPhone />}>
           Phone Login 
        </Button>
        <Button  borderRadius="0" mb="25px" pt="18px" pr="75px" pb="18px" bg="whiteAlpha.100" fontSize="sm" border="1px solid rgba(0, 0, 0, 0.10)" color="black" pl="75px" size="sm" leftIcon={< FcGoogle />}>
            Google
        </Button>
      </Box>
    </Flex>
    <div id="sign-in-button" />
  </div>
  )
}

export default PhoneLogin