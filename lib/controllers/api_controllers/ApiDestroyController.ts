import { Request, Response } from 'express'   
import {ApiBaseController} from "../@_api_abstract_controllers"
import {console_logger} from '../../@utilities'

class ApiDestroyController extends ApiBaseController{

    protected delete(request:Request, response:Response){
        console_logger('Inside ApiDestroyController')
    }


    dispatch(request:Request, response:Response){
        /* check permission and dispatch delete() method */

        if(!this.permission_class) return this.delete(request, response)

        //if permission_class is provided
        const valid = this.check(request, response)
        if(valid){
            this.delete(request, response)
        }         
    }
}


export default ApiDestroyController  