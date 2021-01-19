import React, { useState } from 'react'

function Register(props) {
  let [username, setUsername] = useState('')
  let [name, setName] = useState('')
  let [password, setPassword] = useState('')

  let handleSubmit = (event) => {
    event.preventDefault()
    // fetch to create new user
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username: username,
        name: name,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      let { user } = data
      localStorage.token = data.jwt
      props.handleLogin(user)
    })
  }

  return (
    <div className="login-container">
      <h2>Please Register for an Account</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={evt => setName(evt.target.value)}
          />
        </div>
        <div>
          <label>username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={evt => setUsername(evt.target.value)}
          />
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

export default Register