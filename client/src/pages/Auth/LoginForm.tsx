import axios from "axios";
import { FormEvent, useState } from "react";
import { Text } from "../../components/inputs/Text";

export default function LoginForm() {

  const [data, setData] = useState({username:"", password:""});
  const [errors, setErrors] = useState<any>();

  const loginHandle = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios({
      method: "POST",
      withCredentials: true,
      url: "/api/auth/signin",
      data
    }).then((res:any) => {
      if (res.data.errors) {
        return setErrors(res.data.errors);
      }
      const win:Window = window;
      win.location = "/" 
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <form onSubmit={(e) => loginHandle(e)}>
      <Text data={data} setData={setData} name="username" errors={errors}  />
      <Text data={data} setData={setData} name="password" errors={errors} type="password"  />
      <div className="field">
        <div className="control">
          <button className="button is-link">Login</button>
        </div>
      </div>
    </form>
  );
}
