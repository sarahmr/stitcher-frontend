import React from 'react'

class SignIn extends React.Component {
  render(){
    return (
      <div className="login-container">
        <h2>Please Sign In</h2>
        <form className="login-form">
          <div>
            <label>username:</label>
            <input></input>
          </div>
          <div>
            <label>password:</label>
            <input></input>
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