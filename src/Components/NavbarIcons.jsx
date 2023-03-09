import {
  Flex,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiHeart } from "react-icons/bi";
import { GrUser } from "react-icons/gr";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { useDispatch, useSelector, userDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { userLogOut } from "../Redux/AuthReducer/action";
import Toast from "./Cart-Components/Toast";

const NavbarIcons = () => {
  const [toastData, setToastData] = useState(null);
  const { name, userId } = useSelector((store) => store.AuthReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userLogOut());
    setToastData({
      msg: "LogOut Successfully 😊",
      type: "success",
    });
    setTimeout(() => {
      setToastData(null);
    }, 2000);
  };
  return (
    <>
      <Toast message={toastData?.msg} type={toastData?.type} />
      <Flex
        textAlign={"center"}
        bg={""}
        pr="20px"
        justifyContent={"space-around"}
        w="auto"
        gap="15px"
      >
        {/* <Link
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        to="/Login"
      > */}
        {/* <GrUser style={{ fontSize: "20px", fontWeight: "200" }} />
      <span>Profile</span> */}
        {/* </Link> */}
        <Menu>
          <MenuButton
            flexDirection={"column-reverse"}
            gap={"5px"}
            background={"none"}
            fontWeight={"100"}
            as={Button}
            rightIcon={<GrUser />}
            _hover={"none"}
            _active={"none"}
          >
            Profile
          </MenuButton>
          <MenuList>
            {name && <MenuItem>{name}</MenuItem>}
            {userId ? (
              <MenuItem onClick={handleLogOut}>LogOut</MenuItem>
            ) : (
              <>
                <Link to={"/login"}>
                  <MenuItem>Login</MenuItem>
                </Link>
                <Link to={"/signup"}>
                  <MenuItem>Signup</MenuItem>
                </Link>
              </>
            )}
          </MenuList>
        </Menu>
        <Link
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
          to="/wishlist"
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
          to="/cart"
        >
          <HiOutlineShoppingBag style={{ fontSize: "20px" }} />
          <span>Bag</span>
        </Link>
      </Flex>
    </>
  );
};

export default NavbarIcons;
