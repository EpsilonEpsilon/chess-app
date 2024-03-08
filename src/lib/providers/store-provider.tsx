"use client"
import React from "react";
import {HasChildren} from "@/types/types";
import StoreContext, {initializeStore} from "@/store/root";


interface IProps extends HasChildren{}
const storeProvider:React.FC<IProps> = ({children})=>{
    return (
        <>
            <StoreContext.Provider value={initializeStore()}>
                {children}
            </StoreContext.Provider>
        </>
    )
}

export default storeProvider;
