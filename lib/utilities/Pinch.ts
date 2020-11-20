import * as fs from 'fs'
import path from 'path'
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

const createFileWithContent = (srcFilePath:string, destFilePath:string) => {
    //"srcFilePath" is the file to be read from and "destFilePath" is the file to be written to
    fs.readFile(srcFilePath, 'utf8', function(err, fileContent){ 
        createFile(destFilePath, fileContent)
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
    cwd = process.cwd()
    // monk_src = '../../Monk/src'
    //Monk/Library/src/Root/Server
    //./node_modules/Monk/Library/src/
    //path.join(__dirname + '/../src/')
    monk_src = path.join(__dirname + '/../src/')
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

        //destination root files
        const server_file = `.${root}/Server.ts`
        const routes_file = `.${root}/Routes.ts`
        const setup_file = `.${root}/Setup.ts`

        //source  root files
        const monk_server_file = `${monk_root}/Server.txt`
        const monk_routes_file = `${monk_root}/Routes.txt`
        const monk_setup_file = `${monk_root}/Setup.txt`

    
        try {
            createDir(root)
            createFileWithContent(monk_server_file, server_file )
            createFileWithContent(monk_routes_file, routes_file)
            createFileWithContent(monk_setup_file, setup_file)
            // copyFile(monk_server_file, server_file)
            // copyFile(monk_routes_file, routes_file)
            // copyFile(monk_setup_file, setup_file)            
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

        //destination files
        const service_namespace = `${dot_path}/${app_name}/Services/@_service.ts`
        const routes_namespace = `${dot_path}/${app_name}/Routes/@_routes.ts`
        const model_namespace = `${dot_path}/${app_name}/Models/@_model.ts`
        const controller_namespace = `${dot_path}/${app_name}/Controllers/@_controller.ts`

        //destination route file
        const routes_file = `${dot_path}/${app_name}/Routes/${app_name}Routes.ts`
        //source route file
        const monk_routes_file = `${monk_app}/Routes/AppRoutes.ts`

        try {
            createFile(routes_namespace)
            createFile(model_namespace)
            createFile(service_namespace)
            createFile(controller_namespace)

            createFileWithContent(monk_routes_file, routes_file)

        } catch (error) {
            console_logger(`Error: ${error}`)
        }
    }
}

export default Pinch
