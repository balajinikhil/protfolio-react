import React from 'react'
import {connect} from 'react-redux'

import {topProjects} from '../../actions'
import { Link } from 'react-router-dom'

class ProjectsMain extends React.Component{

	componentDidMount(){
		this.props.topProjects()
	}

	renderContent = () => {
	return	this.props.projects.map((project)=>{
		
			return (
				<div className="col-md-12 col-sm-12 col-xs-12" key={project._id}  style={{margin:"7px"}}>
                    <div className="ui segment" style={{background:"black", color:"white"}}>
						<img className="ui small left floated image" src={project.imgUrl}
						 style={{height:"250px", width:"250px", overflow:"hidden"}} alt="title"/>
						<h3 style={{color:"white"}}>{project.title}</h3>
						<p>{project.description}</p>
						<a href={project.url} target="__blank"><button className="ui inverted green button">See more</button></a>
                    </div>
				</div>
				)
		})
	}

 
    render(){
		
        return(
            <div className="fh5co-section fh5co-works">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-12 section-heading">
						<h4>03. Some Things I've Built</h4>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12">
						<div className="row">
								{this.renderContent()}
								<Link to="/projects" className="col-md-12 col-sm-6 col-xs-6 btn btn-primary btn-outline btn-lg btn-block">
									<i className="right arrow icon"></i>
									See more
								</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }
}

const stateMapToProps = state => {
	return {
		projects: Object.values(state.top)
	}
}

export default connect(stateMapToProps, {
	topProjects
})(ProjectsMain) 