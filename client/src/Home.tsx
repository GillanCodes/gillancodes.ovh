import React from 'react'
import { getTranslation } from './langs/translation'

export default function Home() {
  return (
    <div className='test'>
        {getTranslation("home", "welcome")}
    </div>
  )
}
