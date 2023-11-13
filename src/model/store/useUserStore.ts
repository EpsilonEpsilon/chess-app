import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
type State = {
    isLoggedIn:boolean,
    email?:string,
    password?:string,
}

type Actions = {
    toggleAuthState:()=>void,
    setUserProfileInfo:(email:string,password:string)=>void,
}

export const useUserStore = create<State & Actions, [["zustand/devtools", State & Actions]]>(devtools((set)=>({
    isLoggedIn:false,
    toggleAuthState:()=>set((state)=>{
        return {isLoggedIn:!state.isLoggedIn}
    }),
    setUserProfileInfo:(email, password)=>set((state)=>{
        return {email:email, password:password}
    })
})))

