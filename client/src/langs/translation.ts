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

function getCookie(name:string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts?.pop()?.split(';').shift();
}
