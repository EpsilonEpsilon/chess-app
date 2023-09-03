import { create } from 'zustand'

type State = {
    isLoggedIn:boolean,
}

type Actions = {
    toggleAuthState:()=>void,
}

export const useUserStore = create<State & Actions>((set)=>({
    isLoggedIn:false,
    toggleAuthState:()=>set((state)=>{
        return {isLoggedIn:!state.isLoggedIn}
    })
}))

