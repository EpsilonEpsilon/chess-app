import {RootStore} from "@/store/root";
import {makeAutoObservable} from "mobx";

class AppStore{
    public rootStore:RootStore
    public isAuthorized:boolean = false;
    constructor(root:RootStore) {
        this.rootStore = root;

        makeAutoObservable(this, {
            rootStore:false,
        })
    }

    public setAppAuthorization(state:boolean){
        this.isAuthorized = state;
    }
}


export default AppStore;
