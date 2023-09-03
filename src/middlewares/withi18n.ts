import {MiddlewareFactory} from "@/middlewares/types";
import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";
import createMiddleware from "next-intl/middleware";
import {createIntlMiddleware} from "next-intl/server";

const config = {
    // Skip all paths that should not be internationalized. This example skips the
    // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
    matcher: '/((?!api|_next|.*\\..*).*)'
};
export const withi18n:MiddlewareFactory = (next:NextMiddleware,  response:NextResponse)=>{
    return async(request:NextRequest, _next:NextFetchEvent)=>{
        if(request.nextUrl.pathname.match(config.matcher) && !request.nextUrl.pathname.includes('_next') && !request.nextUrl.pathname.includes('_api')){
            console.log(request.nextUrl.pathname)
            const defaultLocale = request.headers.get('x-default-locale') || 'en';
            const handleI18nRouting = createMiddleware({
                locales: ['en'],
                defaultLocale
            });
            const response = handleI18nRouting(request);
            // Step 3: Alter the response
            response.headers.set('x-default-locale', defaultLocale);

            return response;
        }

        return next(request, _next);
    }
}



