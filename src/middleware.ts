import {NextRequest, NextResponse} from "next/server";
import {withi18n} from "@/middlewares/withi18n";


function defaultMiddleware(request:NextRequest) {
    NextResponse.next();
}


export default withi18n(defaultMiddleware)



