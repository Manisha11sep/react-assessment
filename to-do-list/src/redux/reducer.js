var initialState = {
    user: ''
}

const FETCH_USER_DATA = 'FETCH_USER_DATA'


export default function(state=initialState, action){
    switch(action.type){
        case FETCH_USER_DATA:
    
            return {...state, user: action.payload};
            
        default:

            return state;
    }
}

//function to populate user account with user data
export function fetchUserData(user){
    return {
        type: FETCH_USER_DATA,
        payload: user
    }
}







