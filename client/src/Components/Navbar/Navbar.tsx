import { useContext } from "react";
import LangBtn from "./LangBtn";
import ThemeBtn from "./ThemeBtn";
import { UIdContext } from "../../App.context";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const UId = useContext(UIdContext);

  return (
    <nav className='main-nav'>
        <a href="/" className="main-logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
        </a>
        <div className="controls">
            {UId && (
              <NavLink to={"/dashboard"} className={"nav-btn"}>D</NavLink>
            )}
            <ThemeBtn />
            <LangBtn /> 
            
        </div>
    </nav>
  )
}
