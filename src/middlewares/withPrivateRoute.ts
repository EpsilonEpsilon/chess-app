import {MiddlewareFactory} from "@/middlewares/types";
import {NextFetchEvent, NextMiddleware, NextRequest, NextResponse} from "next/server";
import {Routes} from "@/router";
import API from "@/api";

const config = {
    matcher: '/((?!api|_next|.*\\..*).*)'
};
const privateRoute = [Routes.home];
const publicRoutes = [Routes.default, Routes.register, Routes.login];
const withPrivateRoute:MiddlewareFactory = (next:NextMiddleware)=>{
    return async(request:NextRequest, _next:NextFetchEvent)=>{

        if(!request.nextUrl.pathname.match(config.matcher)
            || request.nextUrl.pathname.includes('_next')
            || request.nextUrl.pathname.includes('_api')) return next(request, _next);
        const isPrivateRoute = privateRoute.some(route => request.nextUrl.pathname.includes(route));
        const isPublicRoute = publicRoutes.some(route => request.nextUrl.pathname.includes(route))
        if(!isPublicRoute || !isPublicRoute)  return next(request, _next);

        const token = request.cookies.get("token");
        if(!token && isPrivateRoute)  return NextResponse.redirect(new URL(Routes.default, request.url));
        if(!token && isPublicRoute) return next(request, _next);

        if(!token) throw new Error("Token cannot be undefined or null");
        const {data} = await API.auth.verifyToken({token:token.value})
        if(isPrivateRoute){
            if(!data) return NextResponse.redirect(new URL(Routes.default, request.url));
            if(!data.data.verified) return NextResponse.redirect(new URL(Routes.default, request.url));
            return next(request, _next);
        }
        if(isPublicRoute){
            return NextResponse.redirect(new URL(Routes.home, request.url));
        }

        return next(request, _next);
    }
}

export default withPrivateRoute;
