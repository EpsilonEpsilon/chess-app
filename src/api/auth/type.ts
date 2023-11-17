export interface ResponseWrapper<T>{
    status:"success" | "error",
    data:T
}
