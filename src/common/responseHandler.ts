import { Response } from "express";
import { HttpStatus } from "./constant/httpStatus.enum";
import { IError } from "../interface/error.interface";

export const successResponse = (code:HttpStatus,response:Response,data:any,alreadyWrappedWithdata:false) =>{
    let responseData = alreadyWrappedWithdata ? data : {data:data};
    response.status(code).json(responseData);
}

export const errorResponse = (code:HttpStatus,response:Response,error:IError)=>{
    const errorContent = {
        code,
        key:error.key,
        message:error.messsage,
    }
}