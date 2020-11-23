import { Request, Response } from 'express'  
import { console_logger } from '../../utilities/@_utilities'
import {ApiBaseController} from "../@_api_abstract_controllers"

class ApiUpdateController extends ApiBaseController{

    protected put(request:Request, response:Response){
        console_logger('Inside ApiUpdateController')
    }


    dispatch(request:Request, response:Response){
        /* check permission and dispatch put() method */

        if(!this.permission_class) return this.put(request, response)

        //if permission_class is provided
        const valid = this.check(request, response)
        if(valid){
            this.put(request, response)
        }
    }
}


export default ApiUpdateController  