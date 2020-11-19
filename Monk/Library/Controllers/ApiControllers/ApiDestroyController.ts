import { Request, Response } from 'express'   
import {ApiBaseController} from "../@_api_abstract_controllers"
// import { DispatchError } from "../../Errors/@_errors"



class ApiDestroyController extends ApiBaseController{

    protected delete(request:Request, response:Response){

        if(!this.model){
            console.log('call success without model')
        }
        else{ 
            console.log('call success with model')
        }

    }


    dispatch(request:Request, response:Response){
        //check permission and dispatch delete() method
        if(this.permission_class){
            const valid = this.check(request, response)
        if(valid){
            this.delete(request, response)
        } 
        }else{
            this.delete(request, response)
        }       
    }
}


export default ApiDestroyController  