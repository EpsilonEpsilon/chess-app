import {NextMiddleware, NextResponse} from "next/server";
import {MiddlewareFactory} from "@/middlewares/types";
import {withi18n, withPrivateRoute,} from "@/middlewares";

export function stackMiddlewares(
    functions: MiddlewareFactory[] = [],
    index = 0
): NextMiddleware {
    const current = functions[index];
    const response = NextResponse.next()
    if (current) {
        const next = stackMiddlewares(functions, index + 1);
        return current(next, response);
    }
    return () => response;
}

export default stackMiddlewares([withPrivateRoute, withi18n]);



