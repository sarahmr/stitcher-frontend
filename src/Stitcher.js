import React from 'react'
import NavBar from './NavBar'
import DesignContainer from './DesignContainer'
import CreateDesign from './CreateDesign'
import { Route, Switch } from 'react-router-dom'
import DesignData from './data.json'
import UserProjectsContainer from './UserProjectsContainer'


class Stitcher extends React.Component {

  state = {
    designs: []
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
            <Route path="/create">
              <CreateDesign />
            </Route>
            <Route path="/user/:id">
              <UserProjectsContainer designs={this.state.designs} />
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