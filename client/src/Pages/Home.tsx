import React from 'react'
import { getTranslation } from '../langs/translation'
import TechnoCard from '../Components/TechnoCard'

export default function Home() {
  return (
    <main>
      <section id='introduction'>
        <div className="texts">
          <h1>Gillian <span className='highlight'>Gund</span>, <br /> {getTranslation("introduction", "work")}</h1>
          <p>{getTranslation("introduction", "description")} <span className='highlight'>ReactJs</span>, <span className='highlight'>NodeJs</span> & <span className='highlight'>MongoDB</span></p>
        </div>
        <img src="" alt="Logo" />
      </section>
      <section id='works'>
        <h2 className='title'>{getTranslation("work", "title")}</h2>
        <hr />

      </section>
      <section id='technologies'>
        <h2 className='title'>{getTranslation("techno", "title")}</h2>
        <hr />

        <div className='category'>
          <h3>BackEnd</h3>
          <ul className="grid">
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
          </ul>
        </div>
        <div className='category'>
          <h3>FrontEnd</h3>
          <ul className="grid">
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
            <TechnoCard icon='nodejs.svg' name='NodeJS' />
          </ul>
        </div>
        



      </section>
      <section id='school'>
        <h2 className='title'>{getTranslation("school", "title")}</h2>
        <hr />
      </section>
    </main>
  )
}
