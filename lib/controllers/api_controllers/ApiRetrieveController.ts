import { Request, Response } from 'express'  
import { console_logger } from '../../utilities/@_utilities'
import {ApiBaseController} from "../@_api_abstract_controllers"


class ApiRetrieveController extends ApiBaseController{

    protected get(request:Request, response:Response){
        console_logger('Inside ApiRetrieveController')
    }


    dispatch(request:Request, response:Response){
        /* check permission and dispatch get() method */

        if(!this.permission_class) return this.get(request, response)

        //if permission_class is provided
        const valid = this.check(request, response)
        if(valid){
            this.get(request, response)
        }          
    }
}


export default ApiRetrieveController  