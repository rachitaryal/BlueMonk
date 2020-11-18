import { Request, Response } from 'express'  
import {ApiBaseController} from "../@_api_abstract_controllers"
// import {DispatchError} from "../../Errors/@_errors"


class ApiRetrieveController extends ApiBaseController{

    protected get(request:Request, response:Response){

        if(!this.model){
            console.log('call success without model')
        }
        else{ 
            console.log('call success with model')
        }

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


export default ApiRetrieveController  