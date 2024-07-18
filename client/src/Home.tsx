import React from 'react'
import { getTranslation } from './langs/translation'

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
        <h2 className='title'>{getTranslation("work", "title")} !</h2>
        <hr />

      </section>
    </main>
  )
}
