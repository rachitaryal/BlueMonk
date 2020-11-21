import * as fs from 'fs'
import path from 'path'
import Pinch from './Pinch'
import console_logger from './ConsoleLogger'
const args: string[] = process.argv


const monk_func = (args:string[]) => {

    if(!args[3]){
        console_logger('Incomplete Command')
        return
    }

    const command = args[2].toString()
    const name= args[3].toString()

    //to capitalize the first letter of app and project
    const getName = () => {
        const name_first_character = name.charAt(0).toUpperCase()
        const name_remaining_characters = name.slice(1, name.length)
        const final_name = name_first_character + name_remaining_characters
        return final_name
    }

    const startproject_commands = ['startproject', 'start_project', 'project']
    const createapp_commands = ['createapp', 'create_app', 'app']

    const valid_commands = [...startproject_commands, ...createapp_commands]
    if(!valid_commands.includes(command)){
        console_logger('Invalid Command')
    }

    if(startproject_commands.includes(command)){
        const cwd = process.cwd()
        const src_dir = path.join(cwd + '/src')

        if(fs.existsSync(src_dir)){
            console_logger('Project has already been initiated\n\tRun: "ts-node monk.ts app <app_name>"')
            return
        }
        const project_name = getName()
        const pinch = new Pinch(project_name)
        pinch.source()
        console_logger(`Project "${project_name}" Created`)
    }

    if(createapp_commands.includes(command)){
        const cwd = process.cwd()
        const src_dir = path.join(cwd + '/src')
        
        if(!fs.existsSync(src_dir)){
            console_logger(`Project has not been created yet.\n\tRun: "ts-node monk.ts project <project_name>"`)
            return
        }
        const app_name = getName()
        const app_dir = `src/${app_name}`
        if(fs.existsSync(app_dir)){
            console_logger(`App ${app_name} already exists.`)
            return
        }
        const pinch = new Pinch(app_name)
        pinch.app_directory()
        pinch.app_files()        
        console_logger(`"${app_name}" app created`)

    }


    


}

export default monk_func