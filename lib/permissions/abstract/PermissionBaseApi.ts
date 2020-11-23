import {Request, Response} from 'express'

abstract class PermissionBaseApi{
    request:Request
    response: Response
    constructor(request:Request, response:Response){
        this.request = request
        this.response = response
    }

    abstract validate(): boolean //returns boolean value, true if validated 
}


class PermissionClassBaseApi extends PermissionBaseApi{
    /* 
        Not used for implementation or extension
        Used only for type checking

        Check PermissionBaseApi for extension
    */

    validate = () => false 
}


export default PermissionBaseApi

export { PermissionClassBaseApi }


