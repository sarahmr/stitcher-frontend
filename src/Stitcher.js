import React from 'react'
import NavBar from './NavBar'
import DesignContainer from './DesignContainer'
import CreateDesign from './CreateDesign'
import { Route, Switch } from 'react-router-dom'
import DesignData from './data.json'
import UserProjectsContainer from './UserProjectsContainer'
import ProjectDetail from './ProjectDetail'
import SignIn from './SignIn'


class Stitcher extends React.Component {

  state = {
    designs: [],
    user: null
  }

  componentDidMount(){
    this.setState({
      designs: DesignData.designs
    })
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
              <CreateDesign />
            </Route>
            <Route path="/users/:id">
              <UserProjectsContainer designs={this.state.designs} />
            </Route>
            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/">
              <DesignContainer designs={this.state.designs} />
            </Route>
          </Switch>
        </div>
    )
  }
}


export default Stitcher