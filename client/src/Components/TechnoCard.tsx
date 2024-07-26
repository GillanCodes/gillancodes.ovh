import { useContext } from "react"
import { UIdContext } from "../App.context"
import { useDispatch } from "react-redux";
import { deleteTech } from "../actions/tech.action";
import { isEmpty } from "../Utils/IsEmpty";

export default function TechnoCard({id, icon, name, color}: {id:string, icon:string, name:string, color:string}) {

  const UId = useContext(UIdContext);
  const dispatch:any = useDispatch();

  const delHandle = () => {
    dispatch(deleteTech(id));
  }

  return (
    <li className='tech-card'>
        <div id='icon' style={{backgroundColor:color}}>
            <img src={`${process.env.REACT_APP_CDN_URL}/${icon}`} alt={name} />
        </div>
        <p>{name}</p>
        {!isEmpty(UId) && ( <p className="del-btn" onClick={delHandle}>Delete</p> )}
    </li>
  )
}
