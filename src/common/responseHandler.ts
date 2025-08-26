import { Response } from "express";
import { HttpStatus } from "./constant/httpStatus.enum";
import { IError } from "../interface/error.interface";

export const successResponse = (code:HttpStatus,response:Response,data:any,alreadyWrappedWithData:false) =>{
    let responseData = alreadyWrappedWithData ? data : {data:data};
    response.status(code).json(responseData);
}

export const errorResponse = (code: HttpStatus, response: Response, key: string, message: string, error: IError)=>{
    const errorContent = {
        code,
        key:error.key,
        message:error.message,
    }
    response.status(code).json({error:errorContent});
}