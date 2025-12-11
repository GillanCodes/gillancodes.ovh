import { isEmpty } from "@this/common/utils/isEmpty";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons"; 

export default function ThemeSwitcher() {

        const [theme, setTheme] = useState<string>("");

        const handleTheme: () => void = () => {
                const ele = document.firstElementChild;
                const currentTheme = getTheme(ele!); 

                if (currentTheme == "dark") ele!.setAttribute('data-theme', 'light');
                else ele!.setAttribute('data-theme', 'dark');
                
                setTheme(getTheme(ele!));
                return;
        }

        const getTheme: (element: Element) => string = (element: Element) => {
                const theme = element.getAttribute('data-theme');
                if (isEmpty(theme)) return 'dark';
                return theme!;
        }

        useEffect(() => {
                setTheme(getTheme(document.firstElementChild!));
        }, []);

        return (
                <button className="button is-warning" onClick={handleTheme} title="Switch theme">
                        {theme == "dark" ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
                </button>
        )
}

