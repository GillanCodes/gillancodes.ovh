export function getTranslation (file:string, section:string, text:string)
{
    const translation = require(`./${file}.json`);
    return translation[section][text]
}

