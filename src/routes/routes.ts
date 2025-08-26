import { Router } from "express";
import greetingRoute from "./greeting.route";

export class Routes{
    public router:Router;

    private static instance:Routes;

    public static getInstance():Routes{
        if(!Routes.instance){
            Routes.instance = new Routes();
        }
        return Routes.instance;
    }

    private constructor(){
        this.router = Router();
    }
    setupRoutes(){
        this.router.use("/greeting", greetingRoute);
    }

}