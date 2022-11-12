import * as types from "./actionTypes";

const initialState = {
  name: "Debabrata", //For displaying the login user name
  userId: null, //Can be user Email,Mobile Number
  mobile_number: 9436798788, //required for order place
  wishlist: [], //Array of objects
  cart: [
    {
      product_base_href:
        "https://www.myntra.com/tshirts/elegance/elegance-men-white--navy-blue-striped-polo-collar-t-shirt/18648872/buy",
      img_responsive_src:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/18648872/2022/6/6/36e7a096-89c3-417e-b878-bf79290177451654534063041ElegancemensCottonBlendPoloNeckStripertshirtFebric60cotton401.jpg",
      product_brand: "ELEGANCE",
      product_product: "Men Striped T-shirt",
      product_sizeInventoryPresent: "S,",
      product_sizeInventoryPresent_2: "M,",
      product_sizeInventoryPresent_3: "L,",
      product_sizeInventoryPresent_4: "XL,",
      product_discountedPrice: "Rs. 455",
      product_strike: "Rs. 2399",
      product_discountPercentage: "(81% OFF)",
      product_sizeButton: "M",
      "product-sizeButton_2": "L",
      "product-sizeButton_3": "XL",
      "product-sizeButton_4": "XXL",
    },
    {
      product_base_href:
        "https://www.myntra.com/tshirts/bullmer/bullmer-men-pack-of-2-black--navy-blue-long-sleeves-t-shirt/20085376/buy",
      img_responsive_src:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20085376/2022/9/20/bec75a97-a696-4913-b020-385fdc5e123b1663613801929BULLMERFrontBackPrintedFullSleeveHoodedTshirtsforMenPackof21.jpg",
      product_brand: "BULLMER",
      product_product: "Pack of 2 Long Sleeves T-shirt",
      product_sizeInventoryPresent: "M,",
      product_sizeInventoryPresent_2: "L,",
      product_sizeInventoryPresent_3: "XL,",
      product_sizeInventoryPresent_4: "XXL",
      product_discountedPrice: "Rs. 799",
      product_strike: "Rs. 3998",
      product_discountPercentage: "(80% OFF)",
      product_sizeButton: "M",
      "product-sizeButton_2": "L",
      "product-sizeButton_3": "XL",
      "product-sizeButton_4": "XXL",
    },
    {
      product_base_href:
        "https://www.myntra.com/tshirts/bullmer/bullmer-men-pack-of-2-navy-blue--turquoise-blue-long-sleeves-t-shirt/20085320/buy",
      img_responsive_src:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20085320/2022/9/20/08ecb040-ca26-4739-91c8-d49b3a9c80831663612391889BULLMERFrontBackPrintedFullSleeveHoodedTshirtsforMenPackof21.jpg",
      product_brand: "BULLMER",
      product_product: "Pack of 2 Long Sleeves T-shirt",
      product_sizeInventoryPresent: "M,",
      product_sizeInventoryPresent_2: "L,",
      product_sizeInventoryPresent_3: "XL,",
      product_sizeInventoryPresent_4: "XXL",
      product_discountedPrice: "Rs. 799",
      product_strike: "Rs. 3998",
      product_discountPercentage: "(80% OFF)",
      product_sizeButton: "M",
      "product-sizeButton_2": "L",
      "product-sizeButton_3": "XL",
      "product-sizeButton_4": "XXL",
    },
    {
      product_base_href:
        "https://www.myntra.com/tshirts/bullmer/bullmer-men-pack-of-2-black--grey-long-sleeves-t-shirt/20085370/buy",
      img_responsive_src:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20085370/2022/9/20/c8fb7016-b020-4689-bbbc-676d880086521663614789459BULLMERFrontBackPrintedFullSleeveHoodedTshirtsforMenPackof21.jpg",
      product_brand: "BULLMER",
      product_product: "Pack of 2 Long Sleeves T-shirt",
      product_sizeInventoryPresent: "M,",
      product_sizeInventoryPresent_2: "L,",
      product_sizeInventoryPresent_3: "XL,",
      product_sizeInventoryPresent_4: "XXL",
      product_discountedPrice: "Rs. 799",
      product_strike: "Rs. 3998",
      product_discountPercentage: "(80% OFF)",
      product_sizeButton: "M",
      "product-sizeButton_2": "L",
      "product-sizeButton_3": "XL",
      "product-sizeButton_4": "XXL",
    },
    {
      product_base_href:
        "https://www.myntra.com/tshirts/bullmer/bullmer-men-pack-of-2-blue--pink-long-sleeves-t-shirt/20085298/buy",
      img_responsive_src:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20085298/2022/9/20/04f56fd9-5ad5-4e3d-ac1b-2d9967b29bd61663614734508BULLMERFrontBackPrintedFullSleeveHoodedTshirtsforMenPackof21.jpg",
      product_brand: "BULLMER",
      product_product: "Pack of 2 Long Sleeves T-shirt",
      product_sizeInventoryPresent: "M,",
      product_sizeInventoryPresent_2: "L,",
      product_sizeInventoryPresent_3: "XL,",
      product_sizeInventoryPresent_4: "XXL",
      product_discountedPrice: "Rs. 799",
      product_strike: "Rs. 3998",
      product_discountPercentage: "(80% OFF)",
      product_sizeButton: "M",
      "product-sizeButton_2": "L",
      "product-sizeButton_3": "XL",
      "product-sizeButton_4": "XXL",
    },
    {
      product_base_href:
        "https://www.myntra.com/tshirts/bullmer/bullmer-men-pack-of-2-burgundy--pink-long-sleeves-t-shirt/20085350/buy",
      img_responsive_src:
        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20085350/2022/9/20/22abb7c0-e2d6-4d01-b324-0035e04235c51663614335348BULLMERFrontBackPrintedFullSleeveHoodedTshirtsforMenPackof21.jpg",
      product_brand: "BULLMER",
      product_product: "Pack of 2 Long Sleeves T-shirt",
      product_sizeInventoryPresent: "M,",
      product_sizeInventoryPresent_2: "L,",
      product_sizeInventoryPresent_3: "XL,",
      product_sizeInventoryPresent_4: "XXL",
      product_discountedPrice: "Rs. 799",
      product_strike: "Rs. 3998",
      product_discountPercentage: "(80% OFF)",
      product_sizeButton: "M",
      "product-sizeButton_2": "L",
      "product-sizeButton_3": "XL",
      "product-sizeButton_4": "XXL",
    },
  ], //Array of objects products->(image,brand,title,price,MRP,size,qty=1)
  address: {
    pincode: 560068,
    locality: "BTM Layout",
    town: "2nd B cross",
    city: "Banglore",
    state: "Karnataka",
  }, //For order placing
  isError: false,
  isLoading: false,
};

//set Default item Quantity as 1;
initialState.cart.map((items) => (items["item_quantity"] = 1));
//set Cart item id
initialState.cart.map((items) => (items["id"] = items.product_base_href));

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REMOVE_CART_ITEM:
      const updatedCart = state.cart.filter((item) => item.id !== payload);
      return { ...state, cart: updatedCart };
    case types.ADD_TO_WISHLIST:
      const updatedWishList = [...state.wishlist, payload];
      return { ...state, wishlist: updatedWishList };
    case types.MODIFY_ITEM_QUANTITY:
      const updatedQuantity = state.cart.map((item) => {
        if (item.id === payload.id) {
          item.item_quantity = payload.quantity;
        }
        return item;
      });
      return { ...state, cart: updatedQuantity };

    case types.MODIFY_ITEM_SIZE:
      const updatedSize = state.cart.map((item) => {
        if (item.id === payload.id) {
          item.selected_size = payload.size;
        }
        return item;
      });
      return { ...state, cart: updatedSize };
    default:
      return state;
  }
};
