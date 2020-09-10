import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return (
      <header className="navbar">
        <div>
          <h2 className="stitcher-header">Stitcher</h2>
        </div>
        <div >
          <NavLink to="/">
            <button className="nav-button">Designs</button>
          </NavLink>
          { this.props.user ? 
            <>
            <NavLink to="/create">
              <button className="nav-button">Create a Design</button>
            </NavLink>
            <NavLink to={`/users/${this.props.user.username}`}>
              <button className="nav-button">Your Projects</button>
            </NavLink>
              <button className="nav-button" onClick={this.props.handleLogout}>Sign Out</button>
            </>
          :
            <>
            <NavLink to="/login">
              <button className="nav-button">Sign In</button>
            </NavLink>
            <NavLink to="/register">
              <button className="nav-button">Register</button>
            </NavLink>
            </>
          }
        </div>
      </header>
    )
  }
}

export default NavBar