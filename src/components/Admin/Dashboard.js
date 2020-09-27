import React from 'react';
import {
    connect
} from 'react-redux'

import history from "../../history"
import AddProject from "./AddProject"
import {projectList,deleteOneProject} from '../../actions'


class Dashboard extends React.Component{

    componentDidMount(){
        this.props.projectList()
    }

    renderProjectList = ()=>{
        return this.props.projects.map((project, i)=>{
			return (
                <div className="ui celled list" key={i}>
                    
                    <div className="item">
                        <br />
                        <img className="ui avatar image" src={project.imgUrl} alt={project.title}/>
                        <div className="content">
                            <div className="header">{project.title}</div>
                            <br />
                            <div className="description">{project.description}</div>
                            <br />
                            <a href={project.url} >View</a>
                            <br />
                            <a href={project.gitHubUrl} target="__blank" className="description">{project.gitHubUrl}</a>
                            <br />
                            <button className="ui primary button" onClick={()=>{
                                history.push(`/editP/${project._id}`)
                            }}>Edit</button>
                            <button className="ui negative button" onClick={()=>{
                                this.props.deleteOneProject(this.props.auth.token, project._id);
                                window.location.reload();
                            }}
                            style={{marginLeft:"10px"}} >Delete</button>
                        </div>
                    </div>
                </div>
				)
		})

    }

    renderContent = ()=>{
        return(
            <div className="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-12 section-heading">
						<h4>Dashboard</h4>
                        <AddProject token={this.props.auth.token} />
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12">
						<div className="row">
							<div className="col-md-12"> 
                                {this.renderProjectList()}   
                            </div>
						</div>
					</div>
				</div>
			</div>
		</div>
        )

    }

    render(){
        if(this.props.auth.loggedIn){
           
            return this.renderContent()

        }else{
            history.push("/admLogin")
            return (<div></div>)
        }
    }
}

const mapStateToProps = state =>{
    return {
        auth:state.auth,
        projects:Object.values(state.projects)
    }
}

export default connect(mapStateToProps,{
    projectList,
    deleteOneProject
})(Dashboard)