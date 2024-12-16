import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { createAnnounce, deleteAnnounce, getAnnounces, switchAnnounce } from "../../actions/announce.action";
import { isEmpty } from "../../Utils/IsEmpty";

export default function AnnounceForm()
{

  const dispatch:any = useDispatch();
  const announces = useSelector((state:any) => state.announceReducer);

  const [load, setLoad] = useState(false);
  
  const [newAnnounce, setNewAnnounce] = useState({
        "title": "",
        "content": {
            fr_fr: "",
            en_us: "",
            es_es: "",
            de_de: "",
        },
        active: false
    });

  useEffect(() => {
    dispatch(getAnnounces()).then(() => {
      setLoad(true);
    });
  }, [])

  const submitHandle = (e:React.FormEvent) => {
    e.preventDefault();
    dispatch(createAnnounce(newAnnounce)).then(() => {
      setNewAnnounce({
        "title": "",
        "content": {
            fr_fr: "",
            en_us: "",
            es_es: "",
            de_de: "",
        },
        active: false
      })
    })
  }

  const switchHandle = (id:string) => {
    dispatch(switchAnnounce(id)); 
  }

  const deleteHandle = (id:string) => {
    dispatch(deleteAnnounce(id));
  }

  return (
    <div>
      <h2>Create an Announce</h2>
      <div className="form-container">
          <form onSubmit={submitHandle}>
            <div className="fields">
              <div className="field">
                      <label>Title</label>
                      <input type="text" name='title' id='title' onChange={(e) => setNewAnnounce({...newAnnounce, title:e.target.value})} value={newAnnounce.title}/>
                  </div> 
              </div>

              <hr />

              <div className="fields">
                  <div className="field">
                      <label>Text Français</label>
                      <textarea name="" id="" rows={5} onChange={(e) => setNewAnnounce({...newAnnounce, content: {...newAnnounce.content, fr_fr:e.target.value}})} value={newAnnounce.content.fr_fr}></textarea>
                  </div>
                  <div className="field">
                      <label>Text English</label>
                      <textarea name="" id="" rows={5} onChange={(e) => setNewAnnounce({...newAnnounce, content: {...newAnnounce.content, en_us:e.target.value}})} value={newAnnounce.content.en_us}></textarea>
                  </div>
                  <div className="field">
                      <label>Text Deutsch</label>
                      <textarea name="" id="" rows={5} onChange={(e) => setNewAnnounce({...newAnnounce, content: {...newAnnounce.content, de_de:e.target.value}})} value={newAnnounce.content.de_de}></textarea>
                  </div>
                  <div className="field">
                      <label>Text Espanol</label>
                      <textarea name="" id="" rows={5} onChange={(e) => setNewAnnounce({...newAnnounce, content: {...newAnnounce.content, es_es:e.target.value}})} value={newAnnounce.content.es_es}></textarea>
                  </div>
              </div>

              <hr />

              <div className="fields">
                <div className="field">
                  <button className="button" type="button" onClick={() => setNewAnnounce({...newAnnounce, active:!newAnnounce.active})}>{newAnnounce.active ? "Active" : "Not Active"}</button>
                </div>
              </div>

              <hr />

              <div className="fields">
                  <div className="field">
                      <input type="submit" value="Create announce" className='button' />
                  </div>
              </div>
          </form>
      </div>
      {!isEmpty(announces) && load && (
        <>   
          <h2>Past Announces</h2>
          {announces.map((announce:any, key:number) => {
            return (
              <div className="announce-card" key={key}>
                <div className="announce-card__head">
                  <p>{announce.title}</p>
                  <span>Active ? <input type="checkbox" checked={announce.active} onClick={() => switchHandle(announce._id)} /></span>
                  <p onClick={() => deleteHandle(announce._id)}>Delete</p>
                </div>
                <div className="announce-card__content">
                  <p>{announce.content["fr_fr"]}</p>
                  <p>{announce.content["en_us"]}</p>
                  <p>{announce.content["de_de"]}</p>
                  <p>{announce.content["es_es"]}</p>
                </div>
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}
