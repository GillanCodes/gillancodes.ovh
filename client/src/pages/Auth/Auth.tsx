import { useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useQuery } from "../../utils/useQuery";

export default function Auth() {
  const [form, setForm] = useState(0);

  const query = useQuery();

  useEffect(() => {
    switch (query.get("tab")) {
      case "signin":
      case "login":
        setForm(0);
        break;
      case "signup":
      case "register":
        setForm(1);
        break;
      default:
        setForm(0);
        break;
    }
  }, [query]);

  return (
    <>
      <div className="tabs is-centered is-medium">
        <ul>
          <li className={0 == form ? "is-active" : ""} onClick={() => setForm(0)}><a>Login</a></li>
          <li className={1 == form ? "is-active" : ""} onClick={() => setForm(1)}><a>Register</a></li>
        </ul>
      </div>
      <div className="columns is-desktop is-centered">
        <div className="column is-one-third">
          {0 === form && (<LoginForm />)}
          {1 === form && (<RegisterForm />)}
        </div>
      </div>
    </>
  );
}
