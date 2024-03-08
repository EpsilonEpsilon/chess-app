import {useContext} from "react";
import StoreContext from "@/store/root";


const useStore = ()=>{
    return useContext(StoreContext);
}


export default useStore;
