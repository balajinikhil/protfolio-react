import React from 'react'
import {connect} from "react-redux"

import {projectList} from '../../actions'

class ProjectList extends React.Component{

    componentDidMount(){
        this.props.projectList()
    }

    renderContent = () => {
        return this.props.projects.map((project)=>{
           
            return(
                <div className="ui raised segment" key={project._id} style={{overflow:"hidden"}}>
                    <img src={project.imgUrl} alt={project.title}  className="ui medium right floated image"  />
                           <h2> {project.title}</h2>
                           <h5> {project.description}</h5>
                           <a href={project.url} target="__blank" className="ui right labeled icon positive button">
                                <i className="right arrow icon"></i>
                                Live
                            </a>

                            <a href={project.gitHubUrl} target="__blank" className="ui right labeled icon black button">
                                <i className="github  icon"></i>
                                GitHub
                            </a>
                </div>
            )
        })
    }


    render(){
        return(
            <div id="fh5co-main">
               <div className="ui container">
                    {this.renderContent()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        projects:Object.values(state.projects)
    }
}


export default connect(mapStateToProps, {
    projectList
} )(ProjectList)