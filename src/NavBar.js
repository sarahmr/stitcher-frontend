import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {
  render(){
    return (
      <header className="navbar">
        <div>
          <h2>Stitcher</h2>
        </div>
        <div>
          <NavLink to="/">
            <button>Designs</button>
          </NavLink>
          <NavLink to="/create">
            <button>Create a Design</button>
          </NavLink>
          <button>Sign In</button>
        </div>
      </header>
    )
  }
}

export default NavBar