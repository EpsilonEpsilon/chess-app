import routes, {IRoute} from "@/router/routes";

const handleValidateRoutes = (routes:IRoute[])=>{
    if(!routes.some(r => r.type === "public")) throw new Error("Should have at least one public route");
    if(!routes.some(r => r.type === "public" && r.default)) throw new Error("Should have at least one public default route");
    if(routes.filter(r => r.type === "public" && r.default).length > 1) throw new Error("Should have only one public default route");
    if(routes.filter(r => r.type === "private" && r.default).length > 1) throw new Error("Should have only one private default route");

    return routes;
}

export default handleValidateRoutes(routes);
