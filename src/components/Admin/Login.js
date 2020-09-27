import React from "react";
import {
    connect,
} from 'react-redux'

import {
    login
} from "../../actions/index"
import history from "../../history";

class Login extends React.Component{

    state = { email:"", password:"", submitted:false }

    errorMessage = ()=>{
        if(!this.props.auth.loggedIn){
        return(
            <div className="ui warning message">
                <div className="header">Check Email or Password</div>
                <ul className="list">
                    <li></li>
                </ul>
            </div>
        )
        }else{
            history.push("/admDash")
        }
    }
    
    onFormSumbit = (e)=>{
            e.preventDefault();
            this.props.login(this.state)
            this.setState({submitted:true})
    }

    render(){
        return(
            <div className="ui container">
                <div style={{marginTop:"45px"}}></div>

                <div className="ui raised segment">
                    <form className="ui form warning" onSubmit={this.onFormSumbit}>

                        <div className="field">
                            <label>E-mail</label>
                            <input type="email" placeholder="joe@schmoe.com" required onChange={e=>this.setState({email:e.target.value})} />
                        </div>

                        <div className="field">
                            <label>Password</label>
                            <input type="password" placeholder="Password" required onChange={e=>this.setState({password:e.target.value})} />
                        </div>
                        {this.state.submitted ? this.errorMessage() : ''}
                        <button className="ui positive submit button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps, {
    login
})(Login)