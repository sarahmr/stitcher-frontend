import React from 'react'

class Register extends React.Component {
  render(){
    return (
      <div className="login-container">
        <h2>Please Register for an Account</h2>
        <form className="login-form">
          <div>
            <label>Name:</label>
            <input></input>
          </div>
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

export default Register