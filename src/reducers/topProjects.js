import _ from 'lodash'
import {TOP_PROJECT} from '../actions/types'


const topProjectsReducer = (state = {}, action) => {

    switch(action.type){
        case TOP_PROJECT:
            return {...state, ..._.mapKeys(action.payload, '_id')}
        default:
            return state
    }


}

export default topProjectsReducer