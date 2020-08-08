import React from 'react'

const Footer = ()=>{
        return(
            <div className="fh5co-section">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-12 section-heading">
						<h4>04. Get In Touch</h4>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12">
						<div className="col-md-12" style={{margin:"auto"}}>
							<p>
							<a href="https://github.com/balajinikhil" target="__blank">
								<i className="github icon" style={{fontSize:"37px", margin:"10px", color:"black"}} ></i>
							</a>
							<a href="https://www.linkedin.com/in/balaji-s-868135170" target="__blank">
								<i className="linkedin icon" style={{fontSize:"37px", margin:"10px", color:"#0072b1"}} ></i>
							</a>
							<a href="mailto:balajinikhil96@gmail.com">
								<i className="envelope icon" style={{fontSize:"37px", margin:"10px", color:"#d44638"}} ></i>
							</a>
							<a href="tel:8660586964">
								<i className="mobile alternate icon" style={{fontSize:"37px", margin:"10px", color:"black"}} ></i>
							</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
        )
    }

export default Footer