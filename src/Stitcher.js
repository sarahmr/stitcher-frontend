import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import DesignContainer from './DesignContainer'
import CreateDesign from './CreateDesign'
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom'
import UserProjectsContainer from './UserProjectsContainer'
import ProjectDetail from './ProjectDetail'
import SignIn from './SignIn'
import Register from './Register'


function Stitcher(props) {
  let [designs, setDesigns] = useState([])
  let [currentUser, setCurrentUser] = useState(null)
  let [projects, setProjects] = useState([])

  let history = useHistory()

  useEffect(() => {
    fetch("http://localhost:3001/designs")
    .then(res => res.json())
    .then((obj) => {
      setDesigns(obj)
    })

    if (localStorage.token) {
      fetch("http://localhost:3001/autologin", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          handleLogin(data)
        }
      })
    }
  }, [])

  // let updateUser = newUser => {
  //   setCurrentUser(newUser)
  // }

  let handleLogin = (currentUser) => {
    setCurrentUser(currentUser)
    history.push(`/users/${currentUser.username}`)
  }

  let handleLogout = () => {
    localStorage.removeItem("token")
    setCurrentUser(null)
    setProjects([])
    history.push('/')
  }

  let createNewDesign = (designCells, title) => {
    let newDesign = {
      title: title,
      cells: designCells,
      user_id: currentUser.id
    }

    fetch("http://localhost:3001/designs", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${localStorage.token}`,
        'content-type': "application/json"
      },
      body: JSON.stringify(newDesign)
    })
    .then(res => res.json())
    .then((newDes) => {
      setDesigns([...designs, newDes])
      history.push('/')
    })
  }

  let handleUserDisplay = (routerProps) => {
    if (currentUser) {
      return (
      <UserProjectsContainer
        user={currentUser} 
        projects={projects}
      />
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }

  let removeDesign = (deletedDesign) => {
    let modifiedDesigns = designs.filter(design => design.id !== deletedDesign.id)
    setDesigns(modifiedDesigns)
  }

  return (
    <div>
      <NavBar handleLogout={handleLogout} user={currentUser} />
      <Switch>
        <Route path="/designs/:id" render={routeProps => {
          return <ProjectDetail user={currentUser} match={routeProps.match} removeDesign={removeDesign} />
        }}
        />
        <Route path="/create">
          <CreateDesign createNewDesign={createNewDesign} />
        </Route>
        <Route path="/users/:username" render={handleUserDisplay}/>
        <Route path="/login">
          <SignIn handleLogin={handleLogin} />
        </Route>
        <Route path="/register">
          <Register handleLogin={handleLogin} />
        </Route>
        <Route path="/">
          <DesignContainer user={currentUser} designs={designs} />
        </Route>
      </Switch>
    </div>
  )
}


export default withRouter(Stitcher)