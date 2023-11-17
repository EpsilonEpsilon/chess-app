class HeaderManager{
    protected  headers:{[key:string]:any} = {
        "Content-Type": "application/json",
    };

    setHeader(key:string, value:string){
        if(this.headers[key]) throw new Error("Header already exist. Before set new header you should remove previous");
        this.headers[key.toLowerCase()] = value;
    }

    removeHeader(key:string){
        delete this.headers[key.toLowerCase()];
    }
}

export default HeaderManager;
