import _ from "lodash"
import {
    ALL_PROJECTS
} from "../actions/types"

const projectListReducer = (state = {}, action)=>{


    switch(action.type){
        case ALL_PROJECTS:
            return {...state, ..._.mapKeys(action.payload, "_id")}
        default:
            return state
    }
}

export default projectListReducer