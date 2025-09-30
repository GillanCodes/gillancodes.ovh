/* eslint-disable @typescript-eslint/no-explicit-any */
import { isEmpty } from "@this/common/utils/isEmpty";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDistach } from "../../types/dispatch.type";
import { updateUser } from "../../actions/user.action";
import { RootState } from "../../reducers";
import { useToasts } from "../../components/toast/ToastContext";

type ProfileErrors = {
  username: string,
  picture: string
}

export function Profil() {

  const dispatch = useDispatch<AppDistach>();

  const { data: user, error, loading } = useSelector((state: RootState) => state.userReducer);
  const [load, setLoad] = useState<boolean>(false);

  const [edit, setEdit] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState<any>();
  const [imgUrl, setImgUrl] = useState<any>();

  const { pushToast } = useToasts();

  useEffect(() => {
    if (isEmpty(user)) return setLoad(false);

    setLoad(true);
    setUsername(user!.username);

  }, [user]);

  useEffect(() => {
    console.log(user);
    console.log(loading);
    console.log(error);
  }, [user, loading, error]);

  useEffect(() => {
    if (!isEmpty(error)) {
      const errors:ProfileErrors = error as ProfileErrors;
      if (!isEmpty(errors.username)) pushToast({
        title: "Username is invalid",
        content: errors.username,
        type: "danger",
        duration: 5
      })

      if (!isEmpty(errors.picture)) pushToast({
        title: "Picture is invalid",
        content: errors.picture,
        type: "danger",
        duration: 5
      })
    }
  }, [error, pushToast]);

  useEffect(() => {
    if (!isEmpty(user)) setUsername(user!.username)
  },  [user, edit]);

  const editHandle = () => {
    if (!edit) setEdit(true);
    else {
      setUsername(user!.username);
      setImgUrl(null);
      setEdit(false);
    }
  }

  const saveHandle = async () => {
    setEdit(false);
    const data = new FormData();
    data.append('username', username);
    if (picture){
      data.append("image", picture);
    }

    if (username != user!.username || picture) return dispatch(updateUser(data));
  }

  useEffect(() => {
      if (picture) setImgUrl(URL.createObjectURL(picture));
  }, [picture]);

  return (
    <>
      {load && (
        <>
          <div className="columns is-centered">
            <div className="column is-half-desktop is-full-mobile">
              <div className="columns is-centered">
                  <div className="column is-one-quarter">
                    <label htmlFor="file">
                      <figure className="image is-square is-128x128">
                        <img src={!isEmpty(imgUrl) ? imgUrl : `/cdn/uploads/${user!.avatar}`} alt="Img" className="is-rounded" style={{ objectFit: "cover" }} />
                      </figure>
                    </label>
                    {edit && ( <input type="file" id="file" hidden onChange={(e) => setPicture(e.target.files![0])} accept=".jpg,.png,.jpeg,.webp,.gif" /> )}
                  </div>
                <div className="column">
                  
                  <div className="field is-grouped">
                    {edit ? (
                      <input type="text" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
                    ) : (
                      <h1 className="title" style={{ textTransform: "capitalize" }}>{username}</h1>
                    )}
                    <p className="control">
                      <button className="button is-primary" onClick={editHandle}>{edit ? "Cancel" : "Edit"}</button>
                    </p> 
                    <p className="control">
                      {edit && ( <button className="button is-link" onClick={saveHandle}>Save</button> )}
                    </p>
                  </div>  
                  <p className="subtitle">Placeholder description</p>
                </div>
              </div>
            </div>
            
          </div>
        </>
      )}
    </>
  )
}
