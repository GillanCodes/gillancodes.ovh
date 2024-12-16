import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAnnounces } from "../../actions/announce.action";
import { isEmpty } from "../../Utils/IsEmpty";

export default function AnnounceForm()
{

  const dispatch:any = useDispatch();
  const announces = useSelector((state:any) => state.announceReducer);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    dispatch(getAnnounces()).then(() => {
      setLoad(true);
    });
  }, [])

  useEffect(() => {
    console.log(announces)
  }, [announces])

  return (
    <div>
      {!isEmpty(announces) && load && (
        <>
          <p>announces</p>
          {announces.map((announce:any, key:number) => {
            return (
              <p key={key}>{announce.title}</p>
            )
          })}
        </>
      )}
    </div>
  )
}
