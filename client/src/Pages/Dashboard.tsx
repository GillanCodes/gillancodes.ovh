import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import WorksForm from '../Components/Dashboard/WorksForm';
import TechsForm from '../Components/Dashboard/TechsForm';
import StudiesForm from '../Components/Dashboard/StudiesForm';


export default function Dashboard() {

  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({"tab": "works"});
  }, [])

  return (
    <main id='dashboard'>

      <div className="tabs">
        <ul>
          <li className={searchParams.get('tab') === "works" ? "active": ""} onClick={() => setSearchParams({'tab': "works"})}>Works</li>
          <li className={searchParams.get('tab') === "techs" ? "active": ""} onClick={() => setSearchParams({'tab': "techs"})}>Techs</li>
          <li className={searchParams.get('tab') === "studies" ? "active": ""} onClick={() => setSearchParams({"tab": "studies"})}>Studies</li>
        </ul>
      </div>

      <div className="content">

        {searchParams.get("tab") === "works" && (
          <WorksForm />
        )}
        {searchParams.get("tab") === "techs" && (
          <TechsForm />
        )}
        {searchParams.get("tab") === "studies" && (
          <StudiesForm />
        )}
      </div>

    </main>
  )
}