import { NextMiddleware } from "next/server";
declare type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware;
