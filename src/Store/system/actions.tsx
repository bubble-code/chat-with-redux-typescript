import {SystemState, UPDATE_SESSION} from './type'

export function updateSession(newSession: SystemState){
    return{
        type: UPDATE_SESSION,
        payload: newSession,
    }
}