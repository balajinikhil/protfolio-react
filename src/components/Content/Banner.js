import React from 'react'

import "../../css/banner.css"

class Banner extends React.Component{

    render(){
        return(
            <div id="fh5co-header" style={{backgroundImage:" url(images/polygon.png)"}} data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="bio-photo text-center">
                    <img src="images/profile.jfif" alt="profile-img" className="profile" />
            </div>
        </div>
        )
    }
}

export default Banner