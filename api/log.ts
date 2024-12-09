import * as fs from "node:fs";
import * as path from "node:path";
import sanitizedConfig from "./config/config";

//Init color vars
const Reset = "\x1b[0m",
FgRed = "\x1b[31m",
FgGreen = "\x1b[32m",
FgYellow = "\x1b[33m",
FgCyan = "\x1b[36m",
FgBlack = "\x1b[30m",
BgGreen = "\x1b[42m"

//init constant
const appName:string = sanitizedConfig.APP_NAME;
const timestamp:Date = new Date();
const time = (): string => { 
	return new Date(new Date().valueOf() * 1).toLocaleDateString("fr-FR", {hour: "2-digit", minute: "2-digit", second:"2-digit", weekday: "long", year: "numeric", month: "short", day:"numeric"})
}
const fileName:string = `${timestamp.getDate()}_${timestamp.getMonth() + 1}_${timestamp.getFullYear()}.log`;
const sanitizedPath = path.join(__dirname, sanitizedConfig.LOG_FOLDER);
const filePath:string = `${sanitizedPath}${fileName}`;

//Check if "logs" folder exist ?
fs.readdir(sanitizedPath, (err , data) => {
    if (err) fs.mkdir(sanitizedPath, (err:any) => {
        if (err) throw Error(err);
    });
});

//check if log file exist
fs.readFile(filePath, (err, data) => {
    if (err) fs.writeFile(filePath, '', (err:any) => {
        if (err) throw Error(err);
    });
});

const log = (message:string|object|null|undefined|number, type?:string|number|undefined|null): void => {
    let ln:string = "";
    switch(type)
    {
        case 0:
        case "info":
            ln = `[${time()}] [INFO] ${appName} - ${message}`;
            fs.appendFileSync(filePath, `${ln}\n`);
            console.log(`${FgCyan}${ln}${Reset}`);
            break;

        case 1:
        case "success":
            ln = `[${time()}] [SUCCESS] ${appName} - ${message}`;
            fs.appendFileSync(filePath, `${ln}\n`);
            console.log(`${FgGreen}${ln}${Reset}`);
            break;
        case 2:
        case "warn":
            ln = `[${time()}] [WARN] ${appName} - ${message}`;
            fs.appendFileSync(filePath, `${ln}\n`);
            console.log(`${FgYellow}${ln}${Reset}`);
            break;
        case 3:
        case "error":          
            ln = `[${time()}] [ERROR] ${appName} - ${message}`;
            fs.appendFileSync(filePath, `${ln}\n`);
            console.log(`${FgRed}${ln}${Reset}`);
            break;
        case 4:
        case "debug":
            ln =  `[${time()}] [DEBUG] ${appName} - ${message}`;
            fs.appendFileSync(filePath, `${ln}\n`);
            console.log(`${BgGreen}${FgBlack}${ln}${Reset}`);
            break;
        default:
            ln =  `[${time()}] [---] ${appName} - ${message}`;
            fs.appendFileSync(filePath, `${ln}\n`);
            console.log(`${FgCyan}${ln}${Reset}`);
            break;
    }
    return;
}

export default log;
