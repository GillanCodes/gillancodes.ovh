import React, { useEffect, useState } from 'react'
import { getCookie } from '../../Utils';

export default function LangBtn() {

    const [isOpen, setIsOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("");

    const langTranslate = (lang:string) => {
        switch(lang)
        {
            case "fr_fr":
                return "🇫🇷";
            case "de_de":
                return "🇩🇪";
            case "en_us":
                return "🇬🇧";
            case "es_es":
                return "🇪🇦";
            default:
                return "🇬🇧";
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
                <p>{isOpen ? "❌" : langTranslate(currentLang)}</p>
            </button>

            {isOpen && (
                // <div className='langs'>
                <>
                    <button className='nav-btn' onClick={() => changeLang('en_us')}>🇬🇧</button>
                    <button className='nav-btn' onClick={() => changeLang('fr_fr')}>🇫🇷</button>
                    <button className='nav-btn' onClick={() => changeLang('de_de')}>🇩🇪</button>
                    <button className='nav-btn' onClick={() => changeLang('es_es')}>🇪🇦</button>
                </>
            )}

        </div>
   )
}
