import { getCookie } from "../Utils";

export function getTranslation (section:string, text:string)
{

    const lang = getCookie("lang");
    var translation;

    if (!lang)
    {
        document.cookie = "lang=en_us";
    } else {
        try {
            translation = require(`./${lang}.json`);
        } catch (err:any) {
            translation = require('./en_us.json');
            document.cookie = "lang=en_us"
        }
    }

    if (translation)
        return translation[section][text];
}
