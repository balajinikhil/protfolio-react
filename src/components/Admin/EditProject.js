import React from 'react'
import {
    connect
} from 'react-redux'

import {editProject} from "../../actions";
import dataApi from "../../apis/dataAPI";
import history from "../../history"

class EditProject extends React.Component{

    state = {title:"", url:"", gitHubUrl:"", imgFormat:"", description:"", top:false  }

    componentDidMount(){
        dataApi.get(`/project/${this.props.match.params.id}`).then((res)=>{
            this.setState({title:res.data.project.title});
            this.setState({url:res.data.project.url});
            this.setState({gitHubUrl:res.data.project.gitHubUrl})
            this.setState({imgFormat:res.data.project.imgFormat})
            this.setState({description:res.data.project.description})
            this.setState({top:res.data.project.top})
        })
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.editProject(this.props.match.params.id, this.state, this.props.auth.token)
    }

    renderContent(){
        return(
            <div className="ui container">
                <div style={{marginTop:"45px"}}></div>
                <form className="ui form" onSubmit={this.formSubmit} autoComplete="off">
                    <h3>
                        EDIT PROJECT
                    </h3>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" value={this.state.title} onChange={e=>this.setState({title:e.target.value})} 
                        name="title" placeholder="Title" required />
                    </div>
                    <div className="field">
                        <label>URL</label>
                        <input type="text" value={this.state.url} onChange={e=>this.setState({url:e.target.value})}
                        name="url" placeholder="URL" required />
                    </div>
                    <div className="field">
                        <label>GitHub URL</label>
                        <input type="text" value={this.state.gitHubUrl} onChange={e=>this.setState({gitHubUrl:e.target.value})}
                        name="gitHubUrl" placeholder="GitHub URL" required />
                    </div>
                    <div className="field">
                        <label>Image Format</label>
                        <input type="text" value={this.state.imgFormat} onChange={e=>this.setState({imgFormat:e.target.value})}
                        name="imgFormat" placeholder="Img Format" required />
                    </div>
                    <div className="field" >
                        <label>Description</label>
                        <textarea rows="3" cols="2" value={this.state.description} onChange={e=>this.setState({description:e.target.value})}
                        name="description" placeholder="description" required>
                        </textarea>
                    </div>
                    <div className="field">
                        <label>Top</label>
                        <input type="checkbox" name="top" value={this.state.top} checked={this.state.top}
                        onChange={e=>this.setState({top:!this.state.top})}  />
                    </div>
                    <button className="ui primary button" onClick={()=>{
                        history.push("/admDash")
                    }}>Back to list</button>
                    <button className="ui positive button" type="submit">Submit</button>
                </form>
            </div>
        )
    }

    render(){
        console.log(this.props);
        if(this.props.auth.loggedIn){
           
            return this.renderContent()

        }else{
            history.push("/admLogin")
            return (<div></div>)
        }
    }
}

const mapStateToProps = state => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps, {
    editProject
})(EditProject)