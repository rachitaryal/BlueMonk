import * as fs from 'fs'
import console_logger from './ConsoleLogger'

const createDir = (dirPath:string) => {
    try{
        fs.mkdirSync(process.cwd() + dirPath, {recursive: true})
    }catch(err){
        console_logger(`Error: ${err}`)
    }
}

const createFile = (filePath:string, fileContent='') =>{
    fs.writeFile(filePath, fileContent, (error)=>{
        if(error){
            console_logger(`Error: ${error}`)
        } 
    })
} 

const copyFile = (source_file:string, destination_file:string) =>{
    fs.copyFile(source_file, destination_file, (error) => {
        if (error) console_logger(`Error: ${error}`);
    });
}

class Pinch{
    name:string
    src_path = '/src'
    // monk_src = '../../Monk/src'
    //Monk/Library/src/Root/Server
    //./node_modules/Monk/Library/src/
    monk_src = './node_modules/monk/lib/src/'
    monk_root = `${this.monk_src}/Root`
    monk_app = `${this.monk_src}/App`

    constructor(name:string){
        this.name = name
    }

    source(){
        /* 
            creates root/(project_name) dir for project
            creates Routes.ts, Server.ts and Setup.ts files in root
            copies the content of Routes.ts, Server.ts and Setup.ts from Monk to current project root
        */
        const project_name = this.name
        const src = this.src_path
        const root = `${src}/${project_name}`
        const monk_root = this.monk_root

        const server_file = `.${root}/Server.ts`
        const routes_file = `.${root}/Routes.ts`
        const setup_file = `.${root}/Setup.ts`

        const monk_server_file = `${monk_root}/Server.ts`
        const monk_routes_file = `${monk_root}/Routes.ts`
        const monk_setup_file = `${monk_root}/Setup.ts`

        try {
            createDir(root)
            createFile(server_file)
            createFile(routes_file)
            createFile(setup_file)
            copyFile(monk_server_file, server_file)
            copyFile(monk_routes_file, routes_file)
            copyFile(monk_setup_file, setup_file)            
        } catch (error) {
            console_logger(`Error: ${error}`)
        }
    }

    app_directory(){
         /*
            creates app directory with required folder/dir 
        */
        const src = this.src_path
        const app_name = this.name
        const App = `${src}/${app_name}`
        const Controllers = `${App}/Controllers`
        const Routes = `${App}/Routes`
        const Models = `${App}/Models`
        const Services = `${App}/Services`

        try {
            createDir(App)
            createDir(Controllers)
            createDir(Routes)
            createDir(Models)
            createDir(Services)
        } catch (error) {
            console_logger(`Error: ${error}`)
        }

    }

    app_files(){
        /*
            creates @_(import_utility).ts files for app 
            copies the content of Monk App Routes.ts file to current app routes file
        */
        const src = this.src_path
        const monk_app = this.monk_app
        const app_name = this.name
        const dot_path = `.${src}`
        const service_namespace = `${dot_path}/${app_name}/Services/@_service.ts`
        const routes_namespace = `${dot_path}/${app_name}/Routes/@_routes.ts`
        const model_namespace = `${dot_path}/${app_name}/Models/@_model.ts`
        const controller_namespace = `${dot_path}/${app_name}/Controllers/@_controller.ts`

        const routes_file = `${dot_path}/${app_name}/Routes/${app_name}Routes.ts`
        const monk_routes_file = `${monk_app}/Routes/AppRoutes.ts`

        try {
            createFile(routes_namespace)
            createFile(model_namespace)
            createFile(service_namespace)
            createFile(controller_namespace)

            //create app routes file
            createFile(routes_file)

            //coping routes file from monk/src/app/routes/approutes.ts to current app routes.ts
            copyFile(monk_routes_file, routes_file)
        } catch (error) {
            console_logger(`Error: ${error}`)
        }
    }
}

export default Pinch
