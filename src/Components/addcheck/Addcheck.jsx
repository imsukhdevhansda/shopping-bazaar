import React from 'react'
import { collection, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db } from "../../config/firebaseConfig";


const Addcheck = () => {
    const data =[{
        isBestSeller:false,
        product_title:"Apple iPhone 12 (64GB) - Blue",
        product_main_image_url:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg",
        app_sale_price:"56,900",
        app_sale_price_currency:"₹",
        isPrime:true,
        product_detail_url:"https://www.amazon.in/dp/B08L5WHFT9",
        product_id:"B08L5WHFT9",
        evaluate_rate:"4.5 out of 5 stars",
        original_price:"₹65,900",
    },{
      isBestSeller:false,
      product_title:"Apple iPhone 12 (64GB) - Blue",
      product_main_image_url:"https://m.media-amazon.com/images/I/71ZOtNdaZCL._AC_UY218_.jpg",
      app_sale_price:"56,900",
      app_sale_price_currency:"₹",
      isPrime:true,
      product_detail_url:"https://www.amazon.in/dp/B08L5WHFT9",
      product_id:"B08L5WHFT9",
      evaluate_rate:"4.5 out of 5 stars",
      original_price:"₹65,900",
  } ]
  
  const docToUpdate = doc(db, "users", "DC77fgFQUZWRBMKi1Bn0GQg4Apx1");
    const updateData=async()=>{
        
        updateDoc(docToUpdate , {bag:data})
        .then(()=>{
          alert('data updated')
          getdata()
        }).catch((err)=>{
          alert(err.message)
        })
    }

    const getdata=()=>{
      onSnapshot(docToUpdate , (data)=>{
        console.log(data)
      })
    }

  return (
    // { data.map((item)=>{
    //   return(
    //     <div>
    //     <img src={item.product_main_image_url} alt="img"/>
    //     </div>
    // )
    // })}
    <button onClick={updateData}>addceck</button>
  )
}

export default Addcheck