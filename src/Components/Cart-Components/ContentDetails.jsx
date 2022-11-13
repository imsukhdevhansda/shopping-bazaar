import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "./Button";

const states = [
  {
    code: "AN",
    name: "Andaman and Nicobar Islands",
  },
  {
    code: "AP",
    name: "Andhra Pradesh",
  },
  {
    code: "AR",
    name: "Arunachal Pradesh",
  },
  {
    code: "AS",
    name: "Assam",
  },
  {
    code: "BR",
    name: "Bihar",
  },
  {
    code: "CG",
    name: "Chandigarh",
  },
  {
    code: "CH",
    name: "Chhattisgarh",
  },
  {
    code: "DH",
    name: "Dadra and Nagar Haveli",
  },
  {
    code: "DD",
    name: "Daman and Diu",
  },
  {
    code: "DL",
    name: "Delhi",
  },
  {
    code: "GA",
    name: "Goa",
  },
  {
    code: "GJ",
    name: "Gujarat",
  },
  {
    code: "HR",
    name: "Haryana",
  },
  {
    code: "HP",
    name: "Himachal Pradesh",
  },
  {
    code: "JK",
    name: "Jammu and Kashmir",
  },
  {
    code: "JH",
    name: "Jharkhand",
  },
  {
    code: "KA",
    name: "Karnataka",
  },
  {
    code: "KL",
    name: "Kerala",
  },
  {
    code: "LD",
    name: "Lakshadweep",
  },
  {
    code: "MP",
    name: "Madhya Pradesh",
  },
  {
    code: "MH",
    name: "Maharashtra",
  },
  {
    code: "MN",
    name: "Manipur",
  },
  {
    code: "ML",
    name: "Meghalaya",
  },
  {
    code: "MZ",
    name: "Mizoram",
  },
  {
    code: "NL",
    name: "Nagaland",
  },
  {
    code: "OR",
    name: "Odisha",
  },
  {
    code: "PY",
    name: "Puducherry",
  },
  {
    code: "PB",
    name: "Punjab",
  },
  {
    code: "RJ",
    name: "Rajasthan",
  },
  {
    code: "SK",
    name: "Sikkim",
  },
  {
    code: "TN",
    name: "Tamil Nadu",
  },
  {
    code: "TS",
    name: "Telangana",
  },
  {
    code: "TR",
    name: "Tripura",
  },
  {
    code: "UP",
    name: "Uttar Pradesh",
  },
  {
    code: "UK",
    name: "Uttarakhand",
  },
  {
    code: "WB",
    name: "West Bengal",
  },
];

const ContentDetails = () => {
  const store = useSelector((store) => store.AuthReducer);
  const {
    name: getName,
    mobile_number,
    address: {
      city: getCity,
      locality: getLocality,
      pincode: getPincode,
      state,
      town,
    },
  } = store;

  const [name, setName] = useState(getName || "");
  const [mobile, setMobile] = useState(mobile_number.toString() || "");
  const [pincode, setPincode] = useState(getPincode.toString() || "");
  const [locality, setLocality] = useState(town || "");
  const [city, setCity] = useState(getCity || "");
  const [state_ut, setStateUt] = useState(state || "");

  const handleContactDetails = () => {
    const contentData = {
      name,
      mobile,
      pincode,
      locality,
      city,
      state_ut,
    };
    console.log(contentData);
  };

  return (
    <ContentContainer>
      <ScrollContent>
        <Heading>Contact details</Heading>

        <InputContainer>
          <InputLabel top={name.length} htmlFor="name">
            Name *
          </InputLabel>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            disabled
          />
        </InputContainer>

        <InputContainer>
          <InputLabel top={mobile.length} htmlFor="mobile">
            Mobile No *
          </InputLabel>
          <Input
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="number"
            id="mobile"
            disabled={mobile ? true : false}
          />
        </InputContainer>

        <Heading>Address *</Heading>

        <InputContainer>
          <InputLabel top={pincode.length} htmlFor="pinCode">
            Pin Code *
          </InputLabel>
          <Input
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            type="number"
            id="pinCode"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel top={locality.length} htmlFor="locality">
            Locality / Town *
          </InputLabel>
          <Input
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            type="text"
            id="locality"
          />
        </InputContainer>

        <InputContainer>
          <InputLabel top={city.length} htmlFor="city">
            City *
          </InputLabel>
          <Input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            type="text"
            id="city"
          />
        </InputContainer>

        <InputContainer>
          {/* <InputLabel htmlFor="state">Select State/ UT *</InputLabel> */}
          <select value={state_ut} onChange={(e) => setStateUt(e.target.value)}>
            <option value="">Select State/ UT</option>
            {states.map((state) => {
              return (
                <option key={state.code} value={state.name}>
                  {state.name}
                </option>
              );
            })}
          </select>
        </InputContainer>
      </ScrollContent>

      <Button
        onClick={handleContactDetails}
        fsize={"14px"}
        padding="10px"
        color={"white"}
        width="100%"
        bgColor={"#ff3f6c"}
        text="ADD ADDRESS"
      />
    </ContentContainer>
  );
};

const ContentContainer = styled.div`
  max-width: 480px;
  margin: auto;
  padding: 10px 20px;
  border: 1px solid grey;
`;

const ScrollContent = styled.div`
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 2px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff3f6c;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: blue;
  }
  & > * {
    margin: 15px 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  //   border: 1px solid black;
  :focus-within {
    color: black;
    & > label {
      top: -8px;
    }
  }
`;

export const Input = styled.input`
  padding: 0 12px;
  border: 1px solid #94969f;
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 4px;
  :focus {
    border: 1px solid black;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  background-color: white;
  top: ${(length) => (length.top > 0 ? "-8px" : "11px")};
  left: 12px;
  user-select: none;
  transition-duration: 0.1s;
`;

const Heading = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 13px;
`;

export default ContentDetails;
