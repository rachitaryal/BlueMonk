import { Request, Response } from 'express'
import { ApiBaseClassController } from "../Controllers/@_api_abstract_controllers"


const run = (controller_class:typeof ApiBaseClassController, request:Request, response:Response)=>{
    const class_instance = new controller_class()
    class_instance.dispatch(request, response)
}

export default run
