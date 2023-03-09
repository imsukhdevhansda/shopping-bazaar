import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ChakraProvider } from "@chakra-ui/react";
import { Box, Input, Image, Flex, Button, Text } from "@chakra-ui/react";
import { app, db } from "../config/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from "react-router-dom";

const userInput = {
  username: "",
  email: "",
  password: "",
};

const Signup = () => {
  const auth = getAuth();
  const [data, setdata] = useState(userInput);
  // console.log("data:", data);
  const navigate = useNavigate();

  const handleInput = (event) => {
    let input = { [event.target.name]: event.target.value };
    setdata({ ...data, ...input });
  };

  const handleSubmit = async () => {
    if (data.username !== undefined || "") {
      if (data.email !== undefined || "") {
        // console.log("hi");
        createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((res) => {
            updateProfile(auth.currentUser, {
              displayName: data.username,
            });
            // console.log(res);
            const docData = {
              address: {
                pincode: "",
                locality: "",
                city: "",
                state: "",
              },
              wishlist: [],
              bag: [],
              phone: "",
            };
            setDoc(doc(db, "users", `${res.user.uid}`), docData);
            navigate("/login");
          })
          .catch((err) => alert(err));
      }
    }
  };

  return (
    <ChakraProvider>
      <div style={{ marginTop: "150px" }}>
        <Flex h="100vh" alignItems="center" justifyContent="center">
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
            <Input
              w="90%"
              type="text"
              onChange={handleInput}
              placeholder="Username"
              name="username"
              color="black"
              size="sm"
            />
            <Input
              w="90%"
              type="email"
              onChange={handleInput}
              placeholder="Email"
              name="email"
              color="black"
              size="sm"
            />
            <Input
              w="90%"
              onChange={handleInput}
              placeholder="Password"
              name="password"
              type="password"
              color="black"
              size="sm"
            />
            <Button
              onClick={handleSubmit}
              borderRadius="0"
              mb="-5px"
              pt="18px"
              pr="90px"
              pb="18px"
              pl="90px"
              size="sm"
              bg="red.400"
              fontSize="sm"
            >
              Sign up
            </Button>
            <Text color="rgba(0, 0, 0, 0.50)">
              ------------------- or --------------------
            </Text>
            <Text fontSize="md" color="black">
              Already have account ?
            </Text>
            <Link to="/login">
              <Button
                borderRadius="0"
                mb="25px"
                pt="18px"
                pr="40px"
                pb="18px"
                bg="red.400"
                fontSize="sm"
                pl="40px"
                size="sm"
              >
                LOGIN YOUR ACCOUNT
              </Button>
            </Link>
          </Box>
        </Flex>
      </div>
    </ChakraProvider>
  );
};

export default Signup;
