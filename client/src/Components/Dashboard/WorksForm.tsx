import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { postWork } from '../../actions/works.action';

interface IWork
{
    name:string,
    link: string,
    icon: any,
    description: any,
    tags: any;
}

export default function WorksForm() {

    const [work, setWork] = useState<IWork>({
        "name": "",
        "icon": undefined,
        "link": "",
        "description": {
            fr_fr: "",
            en_us: "",
            es_es: "",
            de_de: "",
        },
        tags: []
    });

    const [tag, setTag] = useState({name: "", color:""});

    const dispatch:any = useDispatch();

    const tagHandle = (e:React.FormEvent) => {
        e.preventDefault();
        setWork({...work, tags: [...work.tags, tag]})
    }

    const submitHandle = (e:React.FormEvent) => {
        e.preventDefault();

        const data = new FormData();
        data.append('name', work.name);
        data.append('icon', work.icon[0]);
        data.append('tags', JSON.stringify(work.tags))
        data.append('description', JSON.stringify(work.description))
        data.append('link', work.link);

        dispatch(postWork(data)).then(() => {
           setWork({
                "name": "",
                "icon": undefined,
                "link": "",
                "description": {
                    fr_fr: "",
                    en_us: "",
                    es_es: "",
                    de_de: "",
                },
                tags: []
            });
            setTag({name: "", color:""});
        })
    }

    return (
        <div className='form-container'>
            <form onSubmit={submitHandle}>
                <div className="fields">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name='title' id='title' onChange={(e) => setWork({...work, name:e.target.value})} value={work.name}/>
                    </div>
                    <div className="field">
                        <label>Link</label>
                        <input type="text" name='link' id='link' onChange={(e) => setWork({...work, link:e.target.value})} value={work.link}/>
                    </div>
                    <div className="field">
                        <label htmlFor="">Icon</label>
                        <input type="file" name="icon" id="icon" onChange={(e) => setWork({...work, icon:e.target.files ? e.target.files : null})}/>
                    </div>
                </div>

                <hr />

                <div className="fields">
                    <div className="field">
                        <label>Text Français</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setWork({...work, description: {...work.description, fr_fr:e.target.value}})} value={work.description.fr_fr}></textarea>
                    </div>
                    <div className="field">
                        <label>Text English</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setWork({...work, description: {...work.description, en_us:e.target.value}})} value={work.description.en_us}></textarea>
                    </div>
                    <div className="field">
                        <label>Text Deutsch</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setWork({...work, description: {...work.description, de_de:e.target.value}})} value={work.description.de_de}></textarea>
                    </div>
                    <div className="field">
                        <label>Text Espanol</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setWork({...work, description: {...work.description, es_es:e.target.value}})} value={work.description.es_es}></textarea>
                    </div>
                </div>

                <hr />

                <div className="fields">
                    <div className="field">
                        <label htmlFor="">Tag</label>
                        <div className="addon">
                            <input type="text" name="" id="" placeholder='Name' onChange={(e) => setTag({...tag, name:e.target.value})} value={tag.name}/>
                            <input type="text" name="" id="" placeholder='Color' onChange={(e) => setTag({...tag, color:e.target.value})} value={tag.color}/>
                        </div>
                        <button onClick={tagHandle}>Add</button>
                    </div>

                    <div className="field">
                        <div className="tags">
                            {work.tags?.map((tag:any) => {
                                return (
                                    <p style={{backgroundColor:tag.color}} className='tag'>{tag.name}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                
                <hr />

                <div className="fields">
                    <div className="field">
                        <input type="submit" value="Create work" className='button' />
                    </div>
                </div>
            </form>
        </div>
    )
}
