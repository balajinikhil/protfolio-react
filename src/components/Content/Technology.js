import React from 'react'

import "../../css/tech.css"

class Technology extends React.Component{
   
    render(){
    return(
        <div className="fh5co-section fh5co-works">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12 section-heading">
                    <h4>02. Technologies</h4>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-12">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px",  marginTop:"4%", color:"#3FA037", }} className="database large icon"></i> 
                            <p>Mongo DB</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px",  marginTop:"4%"}} className="bolt large icon"></i> 
                            <p>Express js</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6 ">
                            <i style={{fontSize:"50px",  marginTop:"4%", color:"#61DBFB"}} className="react large icon"></i> 
                            <p>React js</p>
                        </div> 
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%", color:"#3C873A"}} className="node large icon"></i>
                            <p>Nodejs</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%", color:"#E44D26"}} className="html5 large icon"></i>
                            <p>HTML 5</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%", color:"#2965f1"}} className="css3 alternate large icon"></i>
                            <p>CSS 3</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%", color:"#f0db4f"}} className="js square large icon"></i>
                            <p>Javascript</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%"}} className="bolt large icon"></i>
                            <p>Redux</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%"}} className="bolt large icon"></i>
                            <p>Mongoose</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%", color:"#F1502F"}} className="git square large icon"></i>
                            <p>Git</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%", color:"#CC3534"}} className="npm large icon"></i>
                            <p>NPM</p>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-6">
                            <i style={{fontSize:"50px", marginTop:"4%", color:"#00b5ad"}} className="stripe s large icon"></i>
                            <p>Semantic UI</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
    }
}

export default Technology