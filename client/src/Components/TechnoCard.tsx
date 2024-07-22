
export default function TechnoCard({icon, name, color}: {icon:string, name:string, color:string}) {
  return (
    <li className='tech-card'>
        <div id='icon' style={{backgroundColor:color}}>
            <img src={`/icons/${icon}`} alt={name} />
        </div>
        <p>{name}</p>
    </li>
  )
}
