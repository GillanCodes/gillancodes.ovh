import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Text } from "../../components/inputs/Text";

export default function RegisterForm() {

  const navigate = useNavigate();
  
  const [doPasswordMatch, setPasswordMatch] = useState(true);
  const [data, setData] = useState({username: "", password:"", confirmPassword:""});
  const [errors, setErrors] = useState<any>();

  const registerHandle = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!doPasswordMatch) return;

    axios({
      method: "POST",
      withCredentials: true,
      url: "/api/auth/signup",
      data: data
    }).then((res:any) => {
      if (res.data.errors) {
        return setErrors(res.data.errors); 
      }
      navigate("/auth?tab=signin");
    }).catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    if (data.password != data.confirmPassword) {
      setErrors({...errors, password: "Password don't match", confirmPassword:"Password don't match"})
      setPasswordMatch(false);
    } else {
      setErrors({...errors, password: "", confirmPassword: ""});
      setPasswordMatch(true)
    }
  }, [data])

  return (
    <form onSubmit={(e) => registerHandle(e)}>
      <Text data={data} setData={setData} name="username" errors={errors}  />
      <Text data={data} setData={setData} name="password" errors={errors} type="password"  />
      <Text data={data} setData={setData} name="confirmPassword" errors={errors} type="password" />

      <div className="field">
        <div className="control">
          <button className="button is-link" disabled={!doPasswordMatch}>Register</button>
        </div>
      </div>
    </form>
  );
}
