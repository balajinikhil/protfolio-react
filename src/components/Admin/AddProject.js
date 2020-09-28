import React from 'react'
import {connect} from "react-redux"

import {addOneProject} from "../../actions/index"


class AddProject extends React.Component{

    state={title:"", url:"", gitHubUrl:"", imgFormat:"", description:"", top:false }

    formSubmit = (e) => {
        e.preventDefault()
        this.props.addOneProject(this.props.token, this.state)
        // window.location.reload();
    }

    render(){
        return(
            <form className="ui form" onSubmit={this.formSubmit} autoComplete="off">
                <h3>
                    ADD NEW
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
                    <input type="checkbox" name="top" value={this.state.top} 
                    onChange={e=>this.setState({top:!this.state.top})}  />
                </div>
                <button className="ui positive button" type="submit">Submit</button>
            </form>
        )
    }
}

export default connect(null, {
addOneProject
})(AddProject)