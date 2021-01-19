import React, { useState } from 'react'

function SignIn(props) {
  let [username, setUsername] = useState('')
  let [password, setPassword] = useState('')

  let handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(res => res.json())
    .then( data => {
      let { user } = data
      localStorage.token = data.jwt
      props.handleLogin(user)
    })
  }

  return (
    <div className="login-container">
      <h2>Please Sign In</h2>
      <form className="login-form" onSubmit={ handleSubmit }>
        <div>
          <label>username:</label>
          <input 
            type="text" 
            name="username" 
            value={username} 
            onChange={evt => setUsername(evt.target.value)} />
        </div>
        <div>
          <label>password:</label>
          <input 
            type="password"
            name="password"
            value={password}
            onChange={evt => setPassword(evt.target.value)}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SignIn