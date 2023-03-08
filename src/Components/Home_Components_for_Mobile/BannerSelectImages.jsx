import { Image, LinkBox } from "@chakra-ui/react";
import React from "react";
import "./BannerSelectmages.css";

const BannerSelectImages = () => {
  const prodImages = [
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/10/28/6d5611a2-dc64-4e4b-8fab-3314eb16610e1666944726707-Winterwear-men.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/3/30e42019-d572-4db3-a5a7-cfc029d31d1b1646321730488-T-Shirts.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/3/435c0093-e7dc-4a5a-92c6-7c99c3d375af1646321730454-Shirts.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/3/bd1f1e11-33ad-436f-b44b-1831e2e09be51646321730442-Jeans.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/3/26b5c7af-5269-40d0-873b-548294054d2d1646321730482-Trousers.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2022/7/12/692c04c4-4f35-4fc7-8ee9-fbf0df502b451657622273540-Casual-Footwear.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2022/10/3/56e0f33d-c6e7-4043-a2bf-4d312e014d981664786241965-Kurtas---Sets.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/3/3/3cdb79d7-828d-496b-be8d-12b5f002a9511646321730496-Watches.jpg",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2022/6/28/7447b97b-677a-4b80-b310-7a4de055f6921656392890575-Sportswear_03-----1.png",
    },
    {
      img: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/retaillabs/2022/11/1/0852c93d-2c9e-46f3-9d25-f9b739fadb8b1667281413108-Grooming.gif",
    },
  ];
  return (
    <>
      <LinkBox>
        <div className="Category-image">
          {prodImages.map((imag, id) => {
            return (
              <div key={id}>
                {" "}
                <Image width={"60%"} src={imag.img} />
              </div>
            );
          })}
        </div>
      </LinkBox>
    </>
  );
};

export default BannerSelectImages;
