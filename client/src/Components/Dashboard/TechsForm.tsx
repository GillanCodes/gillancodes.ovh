import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postTech } from '../../actions/tech.action';

export default function TechsForm() {

  const [option, setOption] = useState('back')
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [icon, setIcon] = useState<any>();

  const dispatch:any = useDispatch();

  const handleRadio = (e:any) => {
    setOption(e.target.value)
  }

  const submitHandle = (e:React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', name);
    data.append('icon', icon);
    data.append('category', option);
    data.append('color', color);

    dispatch(postTech(data));
  }


  return (
    <div className='form-container'>

      <form onSubmit={submitHandle}>
        <div className="fields">
          <div className="field">
            <label>Name</label>
            <input type="text" name='name' id='name' onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="field">
            <label>Color</label>
            <input type="text" name='name' id='name' onChange={(e) => setColor(e.target.value)}/>
          </div>
          <div className="field">
            <label>Icon</label>
            <input type="file" name="icon" id="icon" onChange={(e) => setIcon(e.target.files ? e.target.files[0] : null)} />
          </div>
        </div>

        <hr />

        <div className="fields">
          <h2>Category</h2>
          <div className="field">
              <label>
                <input type="radio" name="back" value="back" checked={option === "back"} onClick={handleRadio}/>
                BackEnd
              </label>
          </div>
          <div className="field">
              <label>
                <input type="radio" name="front" value="front" checked={option === "front"} onClick={handleRadio}/>
                FrontEnd
              </label>
          </div>
          <div className="field">
              <label>
                <input type="radio" name="soft" value="soft" checked={option === "soft"} onClick={handleRadio}/>
                Soft
              </label>
          </div>
          <div className="field">
              <label>
                <input type="radio" name="lang" value="lang" checked={option === "lang"} onClick={handleRadio}/>
                Lang
              </label>
          </div>
        </div>

        <hr />

        <div className="fields">
          <div className="field">
            <input type="submit" value="Create Technologie" className='button'/>
          </div>
        </div>

      </form>

    </div>
  )
}
