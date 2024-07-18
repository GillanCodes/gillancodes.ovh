import React, { useEffect, useState } from 'react'
import { getCookie } from '../../Utils';

export default function LangBtn() {

    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("");

    const langTranslate = (lang:string) => {
        switch(lang)
        {
            case "fr_fr":
                return "Fr";
            case "de_de":
                return "De";
            case "en_us":
                return "En";
            default:
                return "En";
        }
    }

    const openHandle = () => {
        setIsOpen(!isOpen);
    }

    const changeLang = (lang:string) => {
        setCurrentLang(lang);
        document.cookie = `lang=${lang}`
        window.location.reload();
    }

    useEffect(() => {
        var clang:string = getCookie('lang')!;
        setCurrentLang(clang);
    }, [])

    return (
        <div className='lang-btns'>
            <button className='nav-btn' onClick={openHandle}>
                <p>{langTranslate(currentLang)}</p>
            </button>

            {isOpen && (
                <div className='langs'>
                    <button className='nav-btn' onClick={() => changeLang('fr_fr')}>Fr</button>
                    <button className='nav-btn' onClick={() => changeLang('en_us')}>En</button>
                    {/* <button className='nav-btn' onClick={() => setCurrentLang('de_de')}>De</button> */}
                </div>
            )}

        </div>
   )
}
