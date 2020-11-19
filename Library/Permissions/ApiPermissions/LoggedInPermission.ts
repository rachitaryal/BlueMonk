import {Request, response, Response} from 'express'
import PermissionBaseApi from "../Abstract/PermissionBaseApi"
// import {LOGGED_IN_USER} from "../Data/Data"



class LoggedInPermission extends PermissionBaseApi{

    // protected getLoggedInUser(){
    //     const user = LOGGED_IN_USER
    //     return user
    // }

    validate(){
        // const loggedInUser = this.getLoggedInUser()
        // if(loggedInUser.id !== this.request.userId) return false
        return false
    }

    check(){
        const valid = this.validate()       
        if(!valid){
            this.response.status(404).json({msg: 'Not Logged In', isLoggedIn: false})
            return false
        }
        return true
    }
}

export default LoggedInPermission