import {RootState} from "@/lib/store";
import {useAppSelector} from "@/lib/store/hooks";

export const appSelector = (state:RootState)=>state.app;
export const useAppState = ()=>useAppSelector(appSelector);
export const useAppActions = ()=>{
    return {

    }
}
