import { Request, Response } from 'express'  
import {ApiBaseController} from "../@_api_abstract_controllers"
// import {DispatchError} from "../../Errors/@_errors"



class ApiUpdateController extends ApiBaseController{

    protected put(request:Request, response:Response){

        if(!this.model){
            console.log('call success without model')
        }
        else{ 
            console.log('call success with model')
        }

    }


    dispatch(request:Request, response:Response){
        //check permission and dispatch put() method
        if(this.permission_class){
            const valid = this.check(request, response)
        if(valid){
            this.put(request, response)
        } 
        }else{
            this.put(request, response)
        }
    }
}


export default ApiUpdateController  