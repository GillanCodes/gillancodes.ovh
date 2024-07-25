import React from 'react'

export default function Auth() {
  return (
    <main>
        <form>
            <div className="fields">
                <div className="field">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="field">
                    <label htmlFor="">Password</label>
                    <input type="password" name="pswd" id="pswd" />
                </div>
            </div>
        </form>
    </main>
  )
}
