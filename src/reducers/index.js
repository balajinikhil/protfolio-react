import {combineReducers} from 'redux'

import topProjects from './topProjects'
import contactsReducers from './contactsReducer'
import projectListReducer from "./projectListReducers"

export default combineReducers({
    top:topProjects,
    contact:contactsReducers,
    projects:projectListReducer

})