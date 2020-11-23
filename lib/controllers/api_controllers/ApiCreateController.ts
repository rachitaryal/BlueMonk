import { Request, Response } from 'express'   
import { console_logger } from '../../utilities/@_utilities'
import { ApiBaseController } from "../@_api_abstract_controllers"

class ApiCreateController extends ApiBaseController{

    protected post(request:Request, response:Response){
        console_logger('Inside ApiCreateController')
    }


    dispatch(request:Request, response:Response){
        /* check permission and dispatch post() method */

        if(!this.permission_class) return this.post(request, response)   
        
        //if permission_class is provided
        const valid = this.check(request, response)
        if(valid){
            this.post(request, response)
        } 
    }

}


export default ApiCreateController  