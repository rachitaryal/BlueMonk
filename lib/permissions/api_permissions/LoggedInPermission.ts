import {Request, Response} from 'express'
import PermissionBaseApi from "../abstract/PermissionBaseApi"
import jwt from 'jsonwebtoken'


class LoggedInPermission extends PermissionBaseApi{

    
    auth(req:Request, res:Response){
        const token = req.header('auth-token')
        if(!token){
            res.status(401).send({error: 'Token Not Provided. Access Denied'})
            return false
        }
        try {
            const verified_user_object = jwt.verify(token, process.env.TOKEN_SECRET || '') 
            return verified_user_object
        } catch (error) {
            res.status(400).send({error: 'Invalid Token. Access Denied'})
            return false
        }   
    }

    validate(){
        const authenticate = this.auth(this.request, this.response)
        if(!authenticate) return false
        return true
    }
}

export default LoggedInPermission