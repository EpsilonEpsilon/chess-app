
import {MiddlewareFactory} from "@/lib/middleware/type";
import {NextMiddleware, NextResponse} from "next/server";
import {i18nMiddleware} from "@/lib/middleware";

const middlewares = [i18nMiddleware];
const stackMiddleware = (functions:MiddlewareFactory[], index:number = 0):NextMiddleware=>{
    const current = middlewares[index];
    if(current){
        const next = stackMiddleware(functions, index + 1);
        return current(next);
    }

    return ()=> NextResponse.next();
}
export default stackMiddleware(middlewares)
