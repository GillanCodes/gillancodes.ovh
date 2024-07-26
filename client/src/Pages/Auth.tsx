import axios from 'axios';
import React, { useState } from 'react'

export default function Auth() {

    const [logs, setLogs] = useState({username: "", password: ""});

    const submitHandle = (e:React.FormEvent) => {
        e.preventDefault();

        console.log(logs)

        axios({
            method:"POST",
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/auth/signin`,
            data: {
                username: logs.username,
                password: logs.password
            }
        }).then((res) => {
            const win:Window = window;
            win.location = '/';
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <main id='auth'>
            <div className="form-content">
                <h2>Auth</h2>
                <div className="form-container">
                    <form onSubmit={submitHandle}>
                        <div className="fields">
                            <div className="field">
                                <label htmlFor="">Username</label>
                                <input type="text" name="username" id="username" onChange={(e:any) => setLogs({...logs, username:e.target.value})}/>
                            </div>
                            <div className="field">
                                <label htmlFor="">Password</label>
                                <input type="password" name="pswd" id="pswd" onChange={(e:any) => setLogs({...logs, password:e.target.value})}/>
                            </div>
                        </div>

                        <hr />

                        <div className="fields">
                            <div className="field">
                                <input type="submit" value="Login" className='button' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
