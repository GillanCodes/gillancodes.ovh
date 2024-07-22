
interface ITag
{
    name: string,
    color: string
}

export default function WorkCard({icon, name, description, tags}: {icon:string, name:string, description:string, tags:any}) {
  return (
    <li className='work-card'>
        <div className="head">
            <div id='icon'>
                <img src={`/icons/${icon}`} alt={name} />
            </div>
            <p>{name}</p>
        </div>
        <div className="body">
            <p>{description}</p>
        </div>
        <div className="footer">
            {tags && tags.map((tag: ITag, key:number) => {
                return (
                    <span className={`tag ${tag.color}`} key={key} style={{backgroundColor:tag.color}}>{tag.name}</span>
                )
            })}
        </div>
    </li>
  )
}