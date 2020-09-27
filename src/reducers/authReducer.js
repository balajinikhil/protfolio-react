import {
    LOGIN,
    LOGOUT
} from "../actions/types"

const initialize = {

    loggedIn: sessionStorage.getItem('loggedIn') || null, 
    token: sessionStorage.getItem('token') || null
}

const authReducer = (state=initialize, action)=>{

    switch(action.type){
        case LOGIN:
            return {...state, loggedIn:action.payload.loggedIn, token:action.payload.token }
        case LOGOUT:
            return {...state, loggedIn:false, token:""}
        default:
            return state
    }
}

export default authReducer