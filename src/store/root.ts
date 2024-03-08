import {createContext} from "react";
import {AppStore} from "@/store/index";
import { enableStaticRendering } from "mobx-react-lite";

enableStaticRendering(typeof window === "undefined");
export class RootStore{
    app:AppStore;
    constructor() {
        this.app = new AppStore(this);
    }
}



let store: RootStore;

// function to initialize the store
export function initializeStore():RootStore {
    const _store = store ?? new RootStore();

    // For server side rendering always create a new store
    if (typeof window === "undefined") return _store;

    // Create the store once in the client
    if (!store) store = _store;

    return _store;
}

const StoreContext = createContext({} as RootStore);
export default StoreContext;

