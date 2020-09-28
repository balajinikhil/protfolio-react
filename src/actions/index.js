import {
    TOP_PROJECT,
    CONTACT,
    ALL_PROJECTS,
    LOGIN, 
    LOGOUT,
    PROJECT
} from './types'
import dataApi from "../apis/dataAPI"
import history from "../history"

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

export const login = (val) => async(dispatch)=>{
    try{
    const response = await dataApi.post("/admin/login", val)

    if(response.data.status === "success"){

        sessionStorage.setItem('loggedIn', true);
        sessionStorage.setItem('token', response.data.token)
  
        dispatch({
            type:LOGIN,
            payload:{
                loggedIn:true,
                token:response.data.token
            }
        })
    }else{
        dispatch({
            type:LOGOUT,
            payload:{
                loggedIn:false,
                token:" "
            }
        })
    }
    }catch(err){
        dispatch({
            type:LOGOUT,
            payload:{
                loggedIn:false,
                token:" "
            }
        })
    }
}

export const editProject = (id, val, token) => async (dispatch) =>{
    try{
        await dataApi.patch(`/project/edit/${id}`, val, {
            headers:{
                Authorization:token
            }
        })
       history.push("/admDash")
        
    }catch(err){
        console.log(err);
    }
}

export const findOneProject = (id) =>   async (dispatch) => {
    try{
        const response = await dataApi.get(`/project/${id}`)

        dispatch({
            type:PROJECT,
            payload:response.data.project
        })

    }catch(err){
        console.log(err);
    }
}

export const addOneProject = (token, data) => async (dispatch) => {
    try{
         await dataApi.post("/project/new", data, {
            headers:{
                Authorization:token
            }
        })
        history.go(0)
        // history.push("/admDash")

    }catch(err){
        console.log(err);
    }
}

export const deleteOneProject = (token, _id) => async (dispatch) =>{
    console.log(token, _id);
    try{
        await dataApi.delete(`/project/delete/${_id}`, {
            headers:{
                Authorization:token
            }
        })
        history.go(0)
        // history.push("/admDash")
    }catch(err){
        console.log(err);
    }
}