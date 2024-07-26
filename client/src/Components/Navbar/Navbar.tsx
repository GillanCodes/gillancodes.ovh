import { useContext } from "react";
import LangBtn from "./LangBtn";
import ThemeBtn from "./ThemeBtn";
import { UIdContext } from "../../App.context";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Navbar() {

  const UId = useContext(UIdContext);

  const logout = () => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/auth/signout`,
      withCredentials:true
    }).then((res) => {
      if (res)
        window.location.reload();
    }).catch((err) => {
      return console.log(err);
    })
  }

  return (
    <nav className='main-nav'>
        <a href="/" className="main-logo">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" />
        </a>
        <div className="controls">
            {UId && (
              <>
                <p className="nav-btn" onClick={logout}>L</p>
                <NavLink to={"/dashboard"} className={"nav-btn"}>D</NavLink>
              </>
            )}
            <ThemeBtn />
            <LangBtn /> 
            
        </div>
    </nav>
  )
}
