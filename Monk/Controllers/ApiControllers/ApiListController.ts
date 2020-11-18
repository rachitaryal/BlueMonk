import { Request, Response } from 'express'  
import {ApiBaseController} from "../@_api_abstract_controllers"


class ApiListController extends ApiBaseController{

    protected get(request:Request, response:Response){
        //get all
    }


    dispatch(request:Request, response:Response){
        //check permission and dispatch get() method
        if(this.permission_class){
            const valid = this.check(request, response)
            if(valid){
                this.get(request, response)
            }
        }else{
            this.get(request, response)
        }   
    }
}


export default ApiListController  