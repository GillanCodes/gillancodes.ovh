import { isEmpty } from "@this/common/utils/isEmpty";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { NavLink } from "react-router";

export default function NavBar() {
  
  const { data: user } = useSelector((state:any) => state.userReducer);

  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (!isEmpty(user)) setAuth(true);
    else setAuth(false);
  }, [user])

  const logoutHandle = () => {
    axios({
      method: "post",
      url: `/api/auth/signout`,
      withCredentials:true
    }).then((res) => {
      if (res)
        window.location.reload();
    }).catch((err) => {
      return console.log(err);
    })
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <NavLink className="navbar-item" to="/">
            Home
          </NavLink> 

        </div>

        <div className="navbar-end">
          
          {auth ? (
             <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-primary" to="/profil">
                  <strong style={{textTransform: "capitalize"}}>{user.username}</strong>
                </NavLink>
                <a className="button is-danger" onClick={() => logoutHandle()}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="buttons">
                <NavLink className="button is-primary" to="/auth?tab=signin">
                  <strong>Sign In</strong>
                </NavLink>
                <NavLink className="button is-light" to="/auth?tab=signup">
                  <strong>Sign Up</strong>
                </NavLink>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </nav>
  )
}
