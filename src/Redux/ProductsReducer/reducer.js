import * as types from "./actionTypes"

const initialData = {
    isLoading : false,
    products : [],
    isError : false
}




const reducer = ( productsState = initialData,action )=>{
    // console.log( "products reducer", action);
    const {type,payload} = action;


    switch(type){
        case types.GET_PRODUCTS_REQUEST :
        return {...productsState, isLoading : true,isError : false }
        case types.GET_PRODUCTS_SUCCESS : 
        return { ...productsState, isLoading: false, isError: false,products : payload };
        case types.GET_PRODUCTS_FAILURE :
            return { ...productsState, isLoading: false, isError: true };
        default : 
        return productsState        

    }


}
export {reducer}