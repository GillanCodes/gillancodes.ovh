//import libs
import * as path from "path";
import * as dotenv from "dotenv";

//dotenv config string
dotenv.config({path:path.resolve(__dirname, '../.env')});

interface ENV 
{
    PORT                : number | undefined;
    JWT_TOKEN           : string | undefined;
    DB_CONNECT_STRING   : string | undefined;
};

interface Config
{
    PORT                : number;
    JWT_TOKEN           : string;
    DB_CONNECT_STRING   : string;
};

//We get env file and format it
const getConfig = (): ENV => {
    return {
        PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
        JWT_TOKEN: process.env.JWT_TOKEN,
        DB_CONNECT_STRING: process.env.DB_CONNECT_STRING,
    };
};

//We check if .env file get all args
const getSanitizedConfig = (config:ENV): Config => {
    for(const [key, value] of Object.entries(config)){
        if (value === undefined) throw new Error(`Missing key ${key} in .env config file.`);
    }
    return config as Config;
}

const config = getConfig();
const sanitizedConfig = getSanitizedConfig(config);

export default sanitizedConfig;
