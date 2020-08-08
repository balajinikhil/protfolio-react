import {
    TOP_PROJECT,
    CONTACT,
    ALL_PROJECTS
} from './types'
import dataApi from "../apis/dataAPI"


export const topProjects = () =>async (dispatch) =>{

    const response = await dataApi.get("/projects/top")

    dispatch({
        type:TOP_PROJECT,
        payload:response.data.projects
    })
}

export const contact = (val)=> async (dispatch) => {

    const response = await dataApi.post("/contact/new", val )

    dispatch({
        type:CONTACT,
        payload:response.data.contact
    })
}

export const projectList = () =>async (dispatch) => {

    const response = await dataApi.get("/projects")

    dispatch({
        type:ALL_PROJECTS,
        payload:response.data.projects
    })
}