import React from 'react'
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import Banner from "./Banner"
import About from "./About"
import Tech from "./Technology"
import ProjectsMain from "./Projects"
// import Contact from "./Contact"
import Footer from "./Footer"

const options = {
    timeout: 5000,
    position: positions.MIDDLE
  };


const View =  ()=>{

    return(
        <React.Fragment>
            <Banner />
            <AlertProvider template={AlertTemplate} {...options}>
            <div id="fh5co-main">
                <About />
                <Tech />
                <ProjectsMain />
                {/* <Contact /> */}
                <Footer />
            </div>
            </AlertProvider>
        </React.Fragment>

    )


}

export default View