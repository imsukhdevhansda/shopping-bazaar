const checkotp=()=>{
   
  if (OTP.length === 6) {
    console.log(OTP);
    let confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(OTP)
      .then((userCredential) => {
        const {displayName, uid} = userCredential.user;
        console.log(displayName, uid);
        const query = doc(db,"users", `${uid}`)
        getDoc(query)
        .then((res)=> {
          const address= {
            pincode: res._document.data.value.mapValue.fields.address.mapValue.fields.pincode.integerValue,
            locality: res._document.data.value.mapValue.fields.address.mapValue.fields.locality,
            city: res._document.data.value.mapValue.fields.address.mapValue.fields.city.stringValue,
            state: res._document.data.value.mapValue.fields.address.mapValue.fields.state.stringValue,
          }
          const { bag, phone, wishlist}={
              bag:res._document.data.value.mapValue.fields.bag.arrayValue.values,
              phone:res._document.data.value.mapValue.fields.phone.stringValue,
              wishlist:res._document.data.value.mapValue.fields.wishlist.arrayValue.values,
          }

          dispatch(phoneloginsuccess({displayName, uid, address, bag, phone, wishlist }))
          navigate("/");

        }).catch((err)=>{
          updateProfile(auth.currentUser, {
            displayName: data.username
          });
          const docData={
            address: {
              pincode: "",
              locality: "",
              city: "",
              state: "",
            },
            wishlist:[],
            bag:[],
            phone:""
          }
         setDoc(doc(db, "users", `${userCredential.user.uid}`), docData);
         navigate("/");
        })})
      .catch((error) => {
        alert(error);
      });
  }
