import _ from "lodash"
import {
    ALL_PROJECTS,
    PROJECT
} from "../actions/types"

const projectListReducer = (state = {}, action)=>{


    switch(action.type){
        case ALL_PROJECTS:
            return {...state, ..._.mapKeys(action.payload, "_id")}
        case PROJECT:
            return action.payload
        default:
            return state
    }
}

export default projectListReducer