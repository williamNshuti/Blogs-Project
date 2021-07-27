import axios from 'axios'

import {FETCH_USERS_FAILURE, 
    FETCH_USERS_REQUEST, 
    FETCH_USERS_SUCCESS} from './userTypes'

    export const fetchUsers = () => {
        return(dispatch) => {
            dispatch(fetchUsersRequest())
            axios
            .get('https://dummyapi.io/data/api/user?limit=10' , {headers: {'app-id':'60ed724761d5653bcdfe8a3c'} })
            .then(response => {
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            } )
        }
    }
    
export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = users => {
   return {
       type: FETCH_USERS_SUCCESS ,
       payload: users
   }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE ,
        payload: error
    }
}

