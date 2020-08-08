import React from 'react'


class Resume extends React.Component{


    render(){
        return(
            <div id="fh5co-main">
                <div className="fh5co-section fh5co-works">
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-sm-4 col-xs-12 section-heading">
						<h4>01. Resume</h4>
					</div>
					<div className="col-md-8 col-sm-8 col-xs-12">
                        <div className="row">
                            <embed src="/resume.pdf" type="application/pdf" width="100%" height="900px">
                            </embed>
                        </div>
					</div>
				</div>
			</div>
		</div>
            </div>
        )
    }
}

export default Resume