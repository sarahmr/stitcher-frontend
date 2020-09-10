import React from 'react'

class SignIn extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
    .then(res => res.json())
    .then( data => {
      let { user } = data
      localStorage.token = data.jwt
      this.props.handleLogin(user)
    })
  }

  render(){
    return (
      <div className="login-container">
        <h2>Please Sign In</h2>
        <form className="login-form" onSubmit={this.handleSubmit}>
          <div>
            <label>username:</label>
            <input 
              type="text" 
              name="username" 
              value={this.state.username} 
              onChange={this.handleChange} />
          </div>
          <div>
            <label>password:</label>
            <input 
              type="password"
              name="password"
              value={this.state.password}
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

export default SignIn