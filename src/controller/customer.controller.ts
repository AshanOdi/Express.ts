import { Request, Response } from "express";
import { errorResponse , successResponse } from "../common/responseHandler";
import { HttpStatus } from "../common/constant/httpStatus.enum";
import { ERRORS } from "../common/constant/errors.constant";


export class CustomerController{
    private static instance:CustomerController;

    public static getInstance():CustomerController{
        if(!CustomerController.instance){
            CustomerController.instance=new CustomerController();

        }
        return CustomerController.instance;

    }
    private constructor(){}

    getCustomer = async (req:Request , res:Response)=>{
        try {
            const {id} = req.params;
            const customer = {
                id:1,
                name:"john Doe",
                email:"John.doe@example.com",
                phone:"123546789",
                address:"123 Main St, Anytown, USA",
            };
            successResponse(HttpStatus.OK,res,customer,false);
        }catch(error){
            errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res,ERRORS.BAD_REQUEST.key,ERRORS.BAD_REQUEST.message,ERRORS.BAD_REQUEST);
        }
    }
}