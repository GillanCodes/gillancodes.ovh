import React, { useContext, useEffect, useState } from 'react'
import { getTranslation } from '../langs/translation'
import TechnoCard from '../Components/TechnoCard'
import WorkCard from '../Components/WorkCard'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from '../Utils/IsEmpty'
import { getCookie } from '../Utils'
import { UIdContext } from '../App.context'
import { deleteStudy } from '../actions/study.action'
import { transformDate } from '../Utils/convertDate'

export default function Home() {

  const works = useSelector((state:any) => state.worksReducer);
  const techs = useSelector((state:any) => state.techsReducer);
  const studies = useSelector((state:any) => state.studyReducer);
  const announce = useSelector((state:any) => state.announceReducer);

  const dispatch:any = useDispatch();
  const UId = useContext(UIdContext);

  const [loadTech, setLoadTech] = useState(false);
  const [loadWork, setLoadWork] = useState(false);
  const [loadStudy, setLoadStudy] = useState(false);

  useEffect(() => {
    if (!isEmpty(works)) setLoadWork(true);
    if (!isEmpty(techs)) setLoadTech(true);
    if (!isEmpty(studies)) setLoadStudy(true);
  }, [works, techs, studies])

  const delStudy = (id:string) => {
    dispatch(deleteStudy(id));
  }

  return (
    <main>
      <section id='introduction'>
        <div className="texts">
          <h1>Gillan<span className='highlight'>Codes</span>, <br /> {getTranslation("introduction", "work")}</h1>
          <p>{getTranslation("introduction", "description")} <span className='highlight'>ReactJs</span>, <span className='highlight'>NodeJs</span> & <span className='highlight'>MongoDB</span></p>
        </div>
        <img src="/memo.png" alt="Logo" className='protrait' />
      </section>

      {!isEmpty(announce) && (
        <div className='announce' id="announcement">
          <h2 className='announce__title'>{announce.title} - {transformDate(announce.updatedAt)} {announce.createdAt !== announce.updatedAt && "(Edited)"}</h2>
          <p className='announce__content'>{announce.content[getCookie('lang')!]}</p>
        </div>
      )}      

      <section id='works'>
        <h2 className='title'>{getTranslation("work", "title")}</h2>
        <hr />
        
        <div className="content">
          <ul className="grid">
            {loadWork && (
              <>
                {works.map((work:any, key:number) => {
                  return (
                    <WorkCard 
                      id={work._id}
                      icon={work.icon} 
                      name={work.name} 
                      description={work.description[getCookie('lang')!]} 
                      tags={work.tags} 
                      link={work.link}
                      key={key}
                    />
                  )
                })}
              </>
            )}
          </ul>  
        </div> 

      </section>
      <section id='technologies'>
        <h2 className='title'>{getTranslation("techno", "title")}</h2>
        <hr />

        {loadTech && (
          <>
            <div className="category">
              <h3>Back-End</h3>
              <ul className='grid'>
                {techs.map((tech:any, key:number) => {
                  if (tech.category === "back")
                    return (
                      <TechnoCard 
                        id={tech._id}
                        icon={tech.icon}
                        name={tech.name}
                        color={tech.color}
                        key={key}
                      />
                    )
                    return null;
                })}  
              </ul> 
            </div>
            
            <div className="category">
              <h3>Front-End</h3>
              <ul className='grid'>
                {techs.map((tech:any, key:number) => {
                  if (tech.category === "front")
                    return (
                      <TechnoCard 
                        id={tech._id}
                        icon={tech.icon}
                        name={tech.name}
                        color={tech.color}
                        key={key}
                      />
                    )
                    return null;
                })}  
              </ul> 
            </div>

            <div className="category">
              <h3>Softwares</h3>
              <ul className='grid'>
                {techs.map((tech:any, key:number) => {
                  if (tech.category === "soft")
                    return (
                      <TechnoCard 
                        id={tech._id}
                        icon={tech.icon}
                        name={tech.name}
                        color={tech.color}
                        key={key}
                      />
                    )
                  return null;
                })}  
              </ul> 
            </div>

            <div className="category">
              <h3>Others</h3>
              <ul className='grid'>
                {techs.map((tech:any, key:number) => {
                  if (tech.category === "lang")
                    return (
                      <TechnoCard 
                        id={tech._id}
                        icon={tech.icon}
                        name={tech.name}
                        color={tech.color}
                        key={key}
                      />
                    )
                    return null;
                })}  
              </ul> 
            </div>
            
            
          </>

        )}
      </section>
      <section id='school'>
        <h2 className='title'>{getTranslation("school", "title")}</h2>
        <hr />

        <div className="timeline">

          {loadStudy && (
            <>
              {studies.sort((a:any,b:any) => b.year - a.year).map((study:any, key:number) => {
                return (
                  <div className={`container ${key % 2 ? "left" : "right"}`} key={key}>
                    <div className="content">
                      <h3>{study.year} {!isEmpty(UId) && ( <p className="del-btn" onClick={() => delStudy(study._id)}>Delete</p> )} </h3>
                      <p>{study.description[getCookie('lang')!]}</p>
                    </div>
                  </div>
                )
              })}
            </>
          )}
        </div> 
      </section>
    </main>
  )
}
