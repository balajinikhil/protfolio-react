import React from 'react'
import {Route, HashRouter} from 'react-router-dom'
import dataApi from '../apis/dataAPI'

import NavBar from './NavBar'
import View from "./Content/View"
import ProjectList from "./Projects/ProjectList"
import Resume from "./Resume/Resume"
import Login from "./Admin/Login"
import Dashboard from "./Admin/Dashboard"
import EditProject from "./Admin/EditProject"

class App extends React.Component{

    componentDidMount(){
        dataApi.get("/")
    }

    render(){
        return(
            <HashRouter >
                <NavBar />
                <Route path="/" exact component={View}></Route>
                <Route path="/projects" component={ProjectList}></Route>
                <Route path="/resume" component={Resume}></Route>
                <Route path="/admLogin" component={Login}></Route>
                <Route path="/admDash" component={Dashboard}></Route>
                <Route path="/editP/:id" component={EditProject}></Route>
            </ HashRouter>

        )
    }
}

export default App