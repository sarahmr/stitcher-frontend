import React from 'react'

class Register extends React.Component {

  state = {
    username: "",
    name: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // fetch to create new user
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then(data => {
      let { user, token } = data
      this.props.handleLogin(user)
      localStorage.token = token
    })
  }

  render(){
    let { username, name, password } = this.state

    return (
      <div className="login-container">
        <h2>Please Register for an Account</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register