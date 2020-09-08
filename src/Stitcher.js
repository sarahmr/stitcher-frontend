import React from 'react'
import NavBar from './NavBar'
import DesignContainer from './DesignContainer'
import CreateDesign from './CreateDesign'
import { Route, Switch, Redirect } from 'react-router-dom'
import DesignData from './data.json'
import UserProjectsContainer from './UserProjectsContainer'
import ProjectDetail from './ProjectDetail'
import SignIn from './SignIn'
import Register from './Register'


class Stitcher extends React.Component {

  state = {
    designs: [],
    user: "Paul"
  }

  componentDidMount(){
    this.setState({
      designs: DesignData.designs
    })
  }

  createNewDesign = (designCells, title) => {
    let newDesign = {
      title: title,
      cells: designCells
    }
    this.setState({
      designs: [...this.state.designs, newDesign]
    })
  }

  handleUserDisplay = (routerProps) => {
    if (this.state.user){
      return (

        <UserProjectsContainer
                  user={this.state.user} 
                  designs={this.state.designs} />
      )
    } else {
      return (
        <Redirect to="/login" />
      )
    }
    // else redirect to sign in, redirect with redirect component
  }

  render(){
    return (
        <div>
          <NavBar />
          <Switch>
            <Route path="/designs/:id" render={routeProps => {
              return <ProjectDetail user={this.state.user} designs={this.state.designs} match={routeProps.match} />
            }}
            />
            <Route path="/create">
              <CreateDesign createNewDesign={this.createNewDesign} />
            </Route>
            <Route path="/users/:id" render={this.handleUserDisplay}/>
              {/* <UserProjectsContainer
                user={this.state.user} 
                designs={this.state.designs} /> */}
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <DesignContainer
                user={this.state.user} 
                designs={this.state.designs} />
            </Route>
          </Switch>
        </div>
    )
  }
}


export default Stitcher