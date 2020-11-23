const console_logger = (...command_string:any[]) =>{
    const blue_color = `\x1b[34m%s\x1b[0m`
    const border_top = "|||||||||||||||||||| M O N K ||||||||||||||||||||"
    const border_bottom = "|||||||||||||||||||||||||||||||||||||||||||||||||"
    console.log(`${border_top}\n`)
    console.log(blue_color,`${command_string}\n`)
    console.log(border_bottom)
}

export default console_logger