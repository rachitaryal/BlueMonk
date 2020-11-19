import { Request, Response } from 'express'  
import { PermissionError } from '../../Errors/@_errors'
import {PermissionClassBaseApi} from "../../Permissions/@_permissions_abstract"


abstract class ApiBaseController{
    permission_class?: typeof PermissionClassBaseApi
    model?: {}[]


    protected check(request:Request, response:Response){
        // check permission based on permission class 
        if(!this.permission_class) throw new PermissionError('Permission Class is not provided')
        const permission_ins = new this.permission_class(request, response)
        const valid = permission_ins.check()
        return valid  
    }

    public abstract dispatch(request:Request, response:Response): void //check permission and dispatch required method

}

class ApiBaseClassController extends ApiBaseController{
    /* 
        Not used for implementation or extension
        Used only for type checking

        Check ApiBaseController for extension
    */
    dispatch(request:Request, response:Response){}
}



export default ApiBaseController 
export {
    ApiBaseClassController
} 
