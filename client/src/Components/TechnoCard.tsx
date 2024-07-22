
export default function TechnoCard({icon, name}: {icon:string, name:string}) {
  return (
    <li className='tech-card'>
        <div id='icon'>
            <img src={`/icons/${icon}`} alt={name} />
        </div>
        <p>{name}</p>
    </li>
  )
}
