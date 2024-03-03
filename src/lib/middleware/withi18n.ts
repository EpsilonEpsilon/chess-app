import {MiddlewareFactory} from "@/lib/middleware/type";
import createIntlMiddleware from 'next-intl/middleware';

const locales = ["en"]
const intlMiddleware = createIntlMiddleware({
    locales,
    localePrefix:"always",
    defaultLocale: 'en'
})
const withi18n:MiddlewareFactory = (next)=>{
    return async (request, _next)=>{
        if(request.nextUrl.pathname.includes("_next") || request.nextUrl.pathname.includes("images")) return next(request, _next);
        // console.log(request.nextUrl.pathname, !/^\/(en\/.*)?$/.test(request.nextUrl.pathname))
        if(!/^\/(en(\/.*)?)?$/) return next(request, _next);
        return intlMiddleware(request);
    }
}


export default withi18n;
