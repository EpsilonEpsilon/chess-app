import {createReducer} from "@reduxjs/toolkit";
import {AppInitialState, appSetAuthorization} from "@/lib/store/features/app/index";

const initialState:AppInitialState = {
    isAuthorised:false,
};
const appReducer = createReducer(initialState, (builder)=>{
    // builder.addCase(appSetAuthorization, (state, action)=>{
    //
    // })
})


export default appReducer;
