import { Router,Request,Response } from "express";
import "routes";

export class GreetingRoute{
    private static instance:GreetingRoute;
    public router:Router;

    public static getInstance():GreetingRoute{
        if(!GreetingRoute.instance){
            GreetingRoute.instance = new GreetingRoute();
        }
        return GreetingRoute.instance;
    }
    
    private constructor(){
        this.router = Router();
        this.setupRoutes();
    }

    private setupRoutes(){
        this.router.get("/",(req:Request,res:Response)=>{
            res.send("Hello World");
        });
        
        this.router.post("/",(req:Request,res:Response)=>{
            const name = req.body.name;
            res.send(`Hello ${name}`);
        });
    }

}