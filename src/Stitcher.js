import React from 'react'
import NavBar from './NavBar'
import DesignContainer from './DesignContainer'
import CreateDesign from './CreateDesign'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import UserProjectsContainer from './UserProjectsContainer'
import ProjectDetail from './ProjectDetail'
import SignIn from './SignIn'
import Register from './Register'


class Stitcher extends React.Component {

  state = {
    designs: [],
    currentUser: null,
    projects: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/designs")
    .then(res => res.json())
    .then((obj) => {
      this.setState({
        designs: obj
      })
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
          this.handleLogin(data)
        }
      })
    }
  }

  updateUser = newUser => {
    this.setState({ currentUser: newUser })
  }

  handleLogin = (currentUser) => {
    this.setState({ currentUser }, 
      () => { this.props.history.push(`/users/${currentUser.username}`)}
    )
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    this.setState({ 
      currentUser: null,
      projects: []
    }, () => { this.props.history.push('/')})
  }

  createNewDesign = (designCells, title) => {
    let newDesign = {
      title: title,
      cells: designCells,
      user_id: this.state.currentUser.id
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
      this.setState({
        designs: [...this.state.designs, newDes]
      },
      () => { this.props.history.push('/')})
    })
  }

  handleUserDisplay = (routerProps) => {
    if (this.state.currentUser) {
      return (
      <UserProjectsContainer
        user={this.state.currentUser} 
        projects={this.state.projects}
      />
      )
    } else {
      return (
        <Redirect to="/" />
      )
    }
  }

  removeDesign = (deletedDesign) => {
    let modifiedDesigns = this.state.designs.filter(design => design.id !== deletedDesign.id)
    this.setState({
      designs: modifiedDesigns
    })
  }

  render(){
    return (
      <div>
        <NavBar handleLogout={this.handleLogout} user={this.state.currentUser} />
        <Switch>
          <Route path="/designs/:id" render={routeProps => {
            return <ProjectDetail user={this.state.currentUser} match={routeProps.match} removeDesign={this.removeDesign} />
          }}
          />
          <Route path="/create">
            <CreateDesign createNewDesign={this.createNewDesign} />
          </Route>
          <Route path="/users/:username" render={this.handleUserDisplay}/>
          <Route path="/login">
            <SignIn handleLogin={this.handleLogin} />
          </Route>
          <Route path="/register">
            <Register handleLogin={this.handleLogin} />
          </Route>
          <Route path="/">
            <DesignContainer user={this.state.currentUser} designs={this.state.designs} />
          </Route>
        </Switch>
      </div>
    )
  }
}


export default withRouter(Stitcher)