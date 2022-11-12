import * as types from './actionTypes'



export const loginsuccess=(payload)=>(dispatch)=>{
   return dispatch({type:types.EMAIL_LOGIN_SUCCESS, payload})
   
}