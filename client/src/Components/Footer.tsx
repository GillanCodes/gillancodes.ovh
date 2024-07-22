import React from 'react'
import { getTranslation } from '../langs/translation'

export default function Footer() {
  return (
    <footer>
        <hr />
        <div className="content">
            <div className="links">
                <a href=""><img src="" alt="Ins" /></a>
                <a href=""><img src="" alt="Git" /></a>
                <a href=""><img src="" alt="Thr" /></a>
                <a href=""><img src="" alt="Mail" /></a>
            </div>
            <div className="techno">
                <p>{getTranslation("footer", "main")} <span>ReactJs</span></p>
            </div>    
        </div> 
    </footer>
  )
}
