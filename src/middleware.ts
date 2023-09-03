import {NextMiddleware, NextRequest, NextResponse} from "next/server";
import {withi18n} from "@/middlewares/withi18n";
import {MiddlewareFactory} from "@/middlewares/types";

function defaultMiddleware(request:NextRequest) {
 return NextResponse.next();
}

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

// @ts-ignore

export default stackMiddlewares([withi18n]);



