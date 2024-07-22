import React from 'react'
import { getTranslation } from '../langs/translation'
import TechnoCard from '../Components/TechnoCard'
import WorkCard from '../Components/WorkCard'

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
        
        <div className="content">
          <ul className="grid">
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Javascript", "color": "#000"}, {"name": "NodeJs", "color": "green"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
            <WorkCard icon='rtb.png' name='Dev' description='This a a description for dev purpose' tags={[{"name": "Test", "color": "red"}, {"name": "Dev", "color": "yellow"}]} />
          </ul>  
        </div> 



      </section>
      <section id='technologies'>
        <h2 className='title'>{getTranslation("techno", "title")}</h2>
        <hr />

        <div className='category'>
          <h3>BackEnd</h3>
          <ul className="grid">
            <TechnoCard icon='nodejs.svg' name='NodeJS' color="red"/>

          </ul>
        </div>
        <div className='category'>
          <h3>FrontEnd</h3>
          <ul className="grid">
            <TechnoCard icon='nodejs.svg' name='NodeJS' color="#000"/>
          </ul>
        </div>

      </section>
      <section id='school'>
        <h2 className='title'>{getTranslation("school", "title")}</h2>
        <hr />

        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h3>2017</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h3>2016</h3>
              <p>Lorem ipsum..</p>
            </div>
          </div>
        </div> 
      </section>
    </main>
  )
}
