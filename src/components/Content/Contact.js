import React from 'react'
import {connect} from "react-redux"
import { withAlert } from "react-alert";

import {contact} from "../../actions/index"

class Contact extends React.Component{

	state = {firstName:"", lastName :"", email:"", message:""}
	alert = this.props.alert

    onSubmit = (e)=>{
		e.preventDefault()
		this.props.contact(this.state)
		this.alert.success(`${this.state.firstName} we will talk soon`)
		this.setState({firstName:"", lastName:"", email:"", message:""})
    }

    render(){
        return(
            <div className="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-12 section-heading">
						<h4>03. Contact</h4>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12">
						<div className="col-md-12">
							<form action="#" onSubmit={this.onSubmit}>
								<div className="form-group">
									<div className="row">
										<div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="First Name" required
                                            value={this.state.firstName} onChange={(val)=>this.setState({firstName:val.target.value}) } />		
										</div>
										<div className="col-md-6">
                                            <input type="text" className="form-control" placeholder="Last Name" required
                                             value={this.state.lastName} onChange={(val)=>this.setState({lastName:val.target.value}) }  />
										</div>
									</div>
								</div>

								<div className="form-group">
									<div className="row">
										<div className="col-md-12">
                                            <input type="email" className="form-control" placeholder="Email" required
                                             value={this.state.email} onChange={(val)=>this.setState({email:val.target.value}) }  />		
										</div>
									</div>
								</div>

								<div className="form-group">
									<div className="row">
										<div className="col-md-12">
                                            <textarea name="email" id="email" cols="30" className="form-control" rows="10" placeholder="Message" 
											value={this.state.message} onChange={(val)=>this.setState({message:val.target.value}) }
											required ></textarea>
										</div>
									</div>
								</div>

								<div className="form-group">
									<div className="row">
										<div className="col-md-6">
											<input type="submit" className="btn btn-primary btn-outline btn-lg btn-block" value="Submit" />
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>			
		)
    }
}


const connectWrapper = connect(null, {
	contact
})(Contact)

export default withAlert()(connectWrapper)