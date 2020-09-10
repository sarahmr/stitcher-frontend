import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return (
      <header className="navbar">
        <div>
          <h2 className="stitcher-header">Stitcher</h2>
        </div>
        <div>
          <NavLink to="/">
            <button>Designs</button>
          </NavLink>
          { this.props.user ? 
            <>
            <NavLink to="/create">
              <button>Create a Design</button>
            </NavLink>
            <NavLink to={`/users/${this.props.user.username}`}>
              <button>Your Projects</button>
            </NavLink>
              <button onClick={this.props.handleLogout}>Sign Out</button>
            </>
          :
            <>
            <NavLink to="/login">
              <button>Sign In</button>
            </NavLink>
            <NavLink to="/register">
              <button>Register</button>
            </NavLink>
            </>
          }
        </div>
      </header>
    )
  }
}

export default NavBar