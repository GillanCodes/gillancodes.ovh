import React from 'react'

export default function TechnoCard({icon, name}: {icon:string, name:string}) {
  return (
    <li className='card'>
        <div id='icon'>
            <img src={`/icons/${icon}`} alt={name} />
        </div>
        <p>{name}</p>
    </li>
  )
}
