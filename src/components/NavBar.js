import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{

    render(){
        return(
          <div className="ui borderless main menu fixed">
            <div className="ui text container">
            <div className="header item">
            <i className="laptop icon"></i> 
            </div>
            <Link to="/" className="ui right floated item">01. About</Link>
            <Link to="/projects" className="ui right floated item">02. Projects</Link>
            <Link to="/resume" className="ui right floated item">03. Resume</Link>
            <Link to="/admDash" className="ui right floated item">05. Admin</Link>
            </div>
          </div>
        )
    }

}

export default NavBar