import React from "react";
import Logo from "../assets/logo-myntra.png";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ChakraProvider,
  Flex,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
// import "./Navbar.js"
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import CenterItemsNavbar from "./CenterItemsNavbar";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiHeart } from "react-icons/bi";
import { GrUser } from "react-icons/gr";
import { GoThreeBars } from "react-icons/go";
import NavbarIcons from "./NavbarIcons";
// import "../assets/a ll.css";

const Navbar = () => {
  return (
    <ChakraProvider>
      <Flex
        h={"75px"}
        justifyContent={"space-around"}
        alignItems="center"
        gap="25px"
        className="header"
      >
        <Menu>
          <MenuButton
            display={{ lg: "none", md: "block", base: "block" }}
            ml="10px"
            as={IconButton}
            aria-label="Options"
            icon={<GoThreeBars style={{ display: "block", margin: "auto" }} />}
            variant="outline"
          />
          <MenuList listStyleType="none">
            <MenuItem>
              <NavbarIcons />
            </MenuItem>
            <MenuItem>
              <li className="menu-item-has-children">
                <Link to="/mens" className="">
                  MEN
                </Link>
              </li>
            </MenuItem>

            <MenuItem>
              <li className="menu-item-has-children">
                <Link to="/women" className="">
                  Women
                </Link>{" "}
              </li>
            </MenuItem>
            <MenuItem>
              <li className="menu-item-has-children">
                <Link to="/kids" className="">
                  Kids
                </Link>{" "}
              </li>
            </MenuItem>
            <MenuItem>
              <li className="menu-item-has-children">
                <Link to="/homeandliving" className="">
                  Homes & Living
                </Link>{" "}
              </li>
            </MenuItem>
            <MenuItem></MenuItem>
            <MenuItem>
              <li className="menu-item-has-children">
                <Link to="/beauty" className="">
                  Beauty
                </Link>{" "}
              </li>
            </MenuItem>
            <MenuItem>
              <li className="menu-item-has-children">
                <Link to="/studio" className="">
                  Studio
                </Link>
              </li>
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <div className="container"> */}
        {/* <div className="row v-center"> */}
        {/* <div className="header-item item-left"> */}
        {/* Mobile Mmenu Trigger */}

        {/* <div className="logo">
              
                <div className="mobile-menu-trigger">
                  <span></span>
                </div>
                
              </div> */}
        <Image
          src={
            "https://raw.githubusercontent.com/imsukhdevhansda/shopping-bazaar/master/src/assets/shopping_bazar.png"
          }
          alt="logo image"
          pl={"20px"}
          w="65px"
        />
        {/* </div> */}
        {/* Menu Start here */}
        <CenterItemsNavbar />
        {/* Menu ends here */}

        <div className="header-item item-right">
          <InputGroup w={{ base: "100%", sm: "100%", md: "100%", lg: "350px" }}>
            <InputRightElement
              pointerEvents="none"
              children={<FaSearch color="gray.300" />}
            />
            <Input
              w="100%"
              className="SearchBar"
              type="tel"
              placeholder="Search for products , brands and more "
            />
          </InputGroup>
        </div>
        <div className="NavbarIcons">
          {" "}
          <NavbarIcons />
        </div>
        {/* </div> */}
        {/* </div> */}
      </Flex>
    </ChakraProvider>
  );
};

export default Navbar;
