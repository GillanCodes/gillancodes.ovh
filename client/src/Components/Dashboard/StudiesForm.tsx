import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { postWork } from '../../actions/works.action';
import { postStudy } from '../../actions/study.action';

interface IStudy
{
    year: string,
    description: {
      fr_fr: string,
      en_us: string,
      es_es: string,
      de_de: string
    },
}

export default function WorksForm() {

    const [study, setStudy] = useState<IStudy>({
        "year": "",
        "description": {
            fr_fr: "",
            en_us: "",
            es_es: "",
            de_de: "",
        },
    });

    const dispatch:any = useDispatch();

    const submitHandle = (e:React.FormEvent) => {
        e.preventDefault();
        dispatch(postStudy(study))
    }

    return (
        <div className='form-container'>
            <form onSubmit={submitHandle}>
                <div className="fields">
                    <div className="field">
                        <label>Year</label>
                        <input type="text" name='title' id='title' onChange={(e) => setStudy({...study, year:e.target.value})} />
                    </div>
                </div>

                <hr />

                <div className="fields">
                    <div className="field">
                        <label>Text Français</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setStudy({...study, description: {...study.description, fr_fr:e.target.value}})}></textarea>
                    </div>
                    <div className="field">
                        <label>Text English</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setStudy({...study, description: {...study.description, en_us:e.target.value}})}></textarea>
                    </div>
                    <div className="field">
                        <label>Text Deutsch</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setStudy({...study, description: {...study.description, de_de:e.target.value}})}></textarea>
                    </div>
                    <div className="field">
                        <label>Text Espanol</label>
                        <textarea name="" id="" rows={5} onChange={(e) => setStudy({...study, description: {...study.description, es_es:e.target.value}})}></textarea>
                    </div>
                </div>

                <hr />

                <div className="fields">
                    <div className="field">
                        <input type="submit" value="Create study" className='button' />
                    </div>
                </div>
            </form>
        </div>
    )
}
