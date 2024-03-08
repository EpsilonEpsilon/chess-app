export interface IRoute{
    pathname:string,
    type:"private" | "public",
    default?:boolean,
}

const routes:IRoute[] = [
    {
        pathname:"/",
        type:"public",
        default:true,
    }
]

export default routes;
