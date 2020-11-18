import { Request, Response } from 'express'   
import { ApiBaseController } from "../@_api_abstract_controllers"

class ApiCreateController extends ApiBaseController{

    protected post(request:Request, response:Response){
        if(!this.model){
            console.log('call success without model')
        }
        else{ 
            console.log(`call success with model`)
        }

    }


    dispatch(request:Request, response:Response){
        //check permission and dispatch post() method       
        if(this.permission_class){
            const valid = this.check(request, response)
            if(valid){
                this.post(request, response)
            } 
        }else{
            this.post(request, response)
        }
    }

}


export default ApiCreateController  