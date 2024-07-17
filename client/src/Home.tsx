import React from 'react'
import { getTranslation } from './langs/translation'

export default function Home() {
  return (
    <div>
        {getTranslation("fr_fr", "home", "welcome")}
    </div>
  )
}
