import { Flex } from "@chakra-ui/react";
import React from "react";
import { BiHeart } from "react-icons/bi";
import { GrUser } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

const NavbarIcons = () => {
  return (
    <Flex
       
      textAlign={"center"}
      bg={""}
      pr="20px"
      justifyContent={"space-around"}
      w="auto"
      gap="15px"
    >
      <Link
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        to=""
      >
        <GrUser style={{ fontSize: "20px", fontWeight: "200" }} />
        <span>Profile</span>
      </Link>
      <Link
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        to=""
      >
        <BiHeart style={{ fontSize: "20px" }} />
        <span>WishList </span>
      </Link>
      <Link
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        to=""
      >
        <HiOutlineShoppingBag style={{ fontSize: "20px" }} />
        <span>Bag</span>
      </Link>
    </Flex>
  );
};

export default NavbarIcons;
