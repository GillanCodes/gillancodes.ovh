import { useContext, useEffect } from "react"
import { UIdContext } from "../App.context"
import { isEmpty } from "../Utils/IsEmpty";
import { useDispatch } from "react-redux";
import { deleteWork } from "../actions/works.action";

interface ITag
{
    name: string,
    color: string
}

export default function WorkCard({id, icon, name, description, tags, link}: {id:string, icon:string, name:string, description:string, tags:any, link:any}) {

    const UId = useContext(UIdContext);
    const dispatch:any = useDispatch();

    const delHandle = () => {
        dispatch(deleteWork(id));
    }

    return (
        <li className='work-card'>
            <div className="head">
                <div id='icon'>
                    <img src={`${process.env.REACT_APP_CDN_URL}/${icon}`} alt={"i"} />
                </div>
                {isEmpty(link) ? 
                (
                    <p>{name}</p>
                ) : (
                    <a href={link} target="_BLANK">{name}</a>
                )}
                {!isEmpty(UId) && ( <p className="del-btn" onClick={delHandle}>Delete</p> )}
            </div>
            <div className="body">
                <p>{description}</p>
            </div>
            <div className="footer">
                {tags && tags.map((tag: ITag, key:number) => {
                    return (
                        <span className={`tag ${tag.color}`} key={key} style={{backgroundColor:tag.color}}>{tag.name}</span>
                    )
                })}
            </div>
        </li>
    )
}