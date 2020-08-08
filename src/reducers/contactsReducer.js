import {
    CONTACT
} from "../actions/types"

const contactsReducers = (state = {} , action)=>{

    switch(action.type){
        case CONTACT:
            return action.payload
        default:
            return state
    }

}

export default contactsReducers