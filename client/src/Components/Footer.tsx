import React from 'react'
import { getTranslation } from '../langs/translation'

export default function Footer() {
  return (
    <footer>
        <hr />
        <div className="content">
            <div className="links">
                <a href="https://github.com/gillancodes" target='_BLANK' className="link">
                  <img src="/icons/github.svg" alt="git" />
                </a>
                <a href="https://www.threads.net/@gicodes" target='_BLANK' className="link">
                  <img src="/icons/threads.svg" alt="thr" />
                </a>
                <a href="https://www.instagram.com/nicholaslostsoul/" target='_BLANK' className="link">
                  <img src="/icons/instagram.svg" alt="int" />
                </a>
                <a href="mailto:gillancodes@laposte.net" className="link">
                  <img src="/icons/email.svg" alt="email" />
                </a>
            </div>
            <div className="techno">
                <p>{getTranslation("footer", "main")} <span>ReactJs</span></p>
            </div>    
        </div> 
    </footer>
  )
}
