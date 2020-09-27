import {combineReducers} from 'redux'

import topProjects from './topProjects'
import contactsReducers from './contactsReducer'
import projectListReducer from "./projectListReducers"
import authReducer from "./authReducer"

export default combineReducers({
    top:topProjects,
    contact:contactsReducers,
    projects:projectListReducer,
    auth:authReducer
})